// @flow

import React, { Component } from 'react'
import { ListView, ScrollView, StyleSheet, View } from 'react-native'
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

const RepositoryItem = ({ navigation, repository }: RepositoryItemProps) =>
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
    loadMore: (pageSize: number) => ?Disposable,
  },
  viewer: Viewer,
}

class Home extends Component {
  props: HomeProps
  state: {
    dataSource: ListView.DataSource,
    loading: boolean,
  }

  constructor(props: HomeProps) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.viewer.repositories.edges),
      loading: false,
    }
  }

  componentWillReceiveProps(nextProps: HomeProps) {
    const { edges } = nextProps.viewer.repositories
    if (edges !== this.props.viewer.repositories.edges) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(edges),
      })
    }
  }

  onPressLoadMore = () => {
    if (this.props.relay.hasMore() && !this.state.loading) {
      this.setState({ loading: true })
      this.props.relay.loadMore(PAGE_SIZE, () => {
        this.setState({ loading: false })
      })
    }
  }

  renderRow = edge =>
    <RepositoryItemContainer
      key={edge.node.id}
      navigation={this.props.navigation}
      repository={edge.node}
    />

  renderFooter = () => {
    if (this.state.loading) {
      return (
        <View style={styles.buttonContainer}>
          <Button disabled title="Loading..." />
        </View>
      )
    }
    if (this.props.relay.hasMore()) {
      return (
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressLoadMore} title="Load more" />
        </View>
      )
    }
    return null
  }

  render() {
    const { dataSource } = this.state
    const contents =
      dataSource.getRowCount() > 0
        ? <ListView
            dataSource={dataSource}
            pageSize={PAGE_SIZE}
            renderFooter={this.renderFooter}
            renderRow={this.renderRow}
            style={sharedStyles.scene}
          />
        : <View style={sharedStyles.scene}>
            <View style={sharedStyles.mainContents}>
              <Text h3>No repository!</Text>
            </View>
          </View>

    return contents
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

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        name="repo"
        type="octicon"
        color="white"
        style={sharedStyles.headerIcon}
      />
    ),
    title: 'Repositories',
  }

  props: {
    navigation: Object,
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
