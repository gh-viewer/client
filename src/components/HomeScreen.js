// @flow

import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Icon, List, ListItem, Text } from 'react-native-elements'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql,
} from 'react-relay'

import ScreenRenderer from './ScreenRenderer'
import sharedStyles from './styles'

import type { HomeScreen_repository as Repository } from './__generated__/HomeScreen_repository.graphql'
import type { HomeScreen_viewer as Viewer } from './__generated__/HomeScreen_viewer.graphql'

type Variables = { [name: string]: any }
type Disposable = {
  dispose(): void,
}

const PAGE_SIZE = 20

type RepositoryItemProps = {
  navigation: Object,
  repository: Repository,
}

const RepositoryItem = ({ navigation, repository }: RepositoryItemProps) => (
  <ListItem
    containerStyle={styles.itemContainer}
    title={repository.name}
    subtitle={repository.owner.isViewer ? null : repository.owner.login}
    rightIcon={{ name: 'chevron-right', type: 'octicon' }}
    onPress={() => {
      navigation.navigate('Repository', {
        id: repository.id,
        name: repository.nameWithOwner,
      })
    }}
  />
)

const RepositoryItemContainer = createFragmentContainer(RepositoryItem, {
  repository: graphql`
    fragment HomeScreen_repository on Repository {
      id
      name
      nameWithOwner
      owner {
        login
        ... on User {
          isViewer
        }
      }
    }
  `,
})

type HomeProps = {
  navigation: Object,
  relay: {
    hasMore: () => boolean,
    isLoading: () => boolean,
    loadMore: (pageSize: number, cb?: Function) => ?Disposable,
  },
  viewer: Viewer,
}
type HomeState = {
  loading: boolean,
}

class Home extends Component<HomeProps, HomeState> {
  state = {
    loading: false,
  }

  onPressLoadMore = () => {
    if (this.props.relay.hasMore() && !this.state.loading) {
      this.setState({ loading: true })
      this.props.relay.loadMore(PAGE_SIZE, () => {
        this.setState({ loading: false })
      })
    }
  }

  render() {
    const { relay, viewer } = this.props

    if (
      !viewer.repositories ||
      !viewer.repositories.edges ||
      viewer.repositories.edges.length === 0
    ) {
      return (
        <View style={sharedStyles.scene}>
          <View style={sharedStyles.mainContents}>
            <Text h3>No repository!</Text>
          </View>
        </View>
      )
    }

    const rows = viewer.repositories.edges.map(edge => {
      return edge && edge.node ? (
        <RepositoryItemContainer
          key={edge.node.id}
          navigation={this.props.navigation}
          repository={edge.node}
        />
      ) : null
    })

    let footer = null
    if (this.state.loading) {
      footer = (
        <View style={styles.buttonContainer}>
          <Button disabled title="Loading..." />
        </View>
      )
    } else if (relay.hasMore()) {
      footer = (
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressLoadMore} title="Load more" />
        </View>
      )
    }

    return (
      <ScrollView>
        <List>
          {rows}
          {footer}
        </List>
      </ScrollView>
    )
  }
}

const HomeScreenQuery = graphql`
  query HomeScreenQuery($count: Int!, $cursor: String) {
    viewer {
      ...HomeScreen_viewer
    }
  }
`

const HomeContainer = createPaginationContainer(
  Home,
  {
    viewer: graphql`
      fragment HomeScreen_viewer on User {
        repositories(
          after: $cursor
          first: $count
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) @connection(key: "HomeScreen_repositories") {
          edges {
            node {
              ...HomeScreen_repository
              id
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `,
  },
  {
    getVariables: (props: HomeProps, paginationVariables: Variables) =>
      paginationVariables,
    query: HomeScreenQuery,
  },
)

export default class HomeScreen extends Component<{
  navigation: Object,
}> {
  static navigationOptions = {
    headerLeft: (
      <View style={sharedStyles.headerLeft}>
        <Icon
          name="repo"
          type="octicon"
          color="white"
          style={sharedStyles.headerIcon}
        />
      </View>
    ),
    title: 'Repositories',
  }

  render() {
    return (
      <ScreenRenderer
        container={HomeContainer}
        navigation={this.props.navigation}
        query={HomeScreenQuery}
        variables={{
          count: PAGE_SIZE,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 15,
  },
  itemContainer: {
    backgroundColor: 'white',
  },
})
