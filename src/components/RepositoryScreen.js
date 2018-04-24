// @flow

import React, { Component } from 'react'
import { Linking, ScrollView, StyleSheet, View } from 'react-native'
import { List, ListItem, Icon, Text } from 'react-native-elements'
import { commitMutation, createFragmentContainer, graphql } from 'react-relay'
import type { Environment } from 'relay-runtime'

import ScreenRenderer from './ScreenRenderer'
import sharedStyles from './styles'

import type { RepositoryScreen_repository as RepositoryType } from './__generated__/HomeScreen_viewer.graphql'

const AddStarMutation = graphql`
  mutation RepositoryScreenAddStarMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`

const RemoveStarMutation = graphql`
  mutation RepositoryScreenRemoveStarMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`

type Props = {
  environment: Environment,
  navigation: Object,
  repository: RepositoryType,
}

class Repository extends Component<Props> {
  onPressParent = () => {
    const { navigation, repository } = this.props
    navigation.navigate('Repository', {
      id: repository.parent.id,
      name: repository.parent.nameWithOwner,
    })
  }

  onPressStar = () => {
    const { environment, repository } = this.props
    const isAdding = !repository.viewerHasStarred

    commitMutation(environment, {
      mutation: isAdding ? AddStarMutation : RemoveStarMutation,
      variables: {
        input: {
          starrableId: repository.id,
        },
      },
      optimisticResponse: isAdding
        ? {
            addStar: {
              starrable: {
                __typename: 'Repository',
                stargazers: {
                  totalCount: repository.stargazers.totalCount + 1,
                },
                viewerHasStarred: true,
              },
            },
          }
        : {
            removeStar: {
              starrable: {
                __typename: 'Repository',
                stargazers: {
                  totalCount: repository.stargazers.totalCount - 1,
                },
                viewerHasStarred: false,
              },
            },
          },
    })
  }

  onPressOpenLink = () => {
    const { repository } = this.props
    Linking.openURL(
      `https://github.com/${repository.owner.login}/${repository.name}`,
    )
  }

  render() {
    const { repository } = this.props

    const description = repository.description ? (
      <View style={sharedStyles.mainContents}>
        <Text h5>{repository.description}</Text>
      </View>
    ) : null

    const starCount = repository.stargazers.totalCount

    const items = [
      <ListItem
        hideChevron
        key="owner"
        leftIcon={{
          name:
            repository.owner.__typename === 'User' ? 'person' : 'organization',
          type: 'octicon',
        }}
        title={repository.owner.login}
      />,
    ]
    if (repository.isFork) {
      items.push(
        <ListItem
          key="parent"
          leftIcon={{ name: 'repo-forked', type: 'octicon' }}
          onPress={this.onPressParent}
          rightIcon={{ name: 'chevron-right', type: 'octicon' }}
          title={repository.parent.nameWithOwner}
        />,
      )
    }
    items.push(
      <ListItem
        key="star"
        leftIcon={{ name: 'star', type: 'octicon' }}
        onPress={this.onPressStar}
        rightIcon={{
          name: repository.viewerHasStarred ? 'x' : 'plus',
          type: 'octicon',
        }}
        title={`${starCount} star${starCount > 1 ? 's' : ''}`}
      />,
    )
    items.push(
      <ListItem
        key="open"
        leftIcon={{ name: 'mark-github', type: 'octicon' }}
        onPress={this.onPressOpenLink}
        rightIcon={{ name: 'link-external', type: 'octicon' }}
        title="Open in GitHub"
      />,
    )

    return (
      <ScrollView style={sharedStyles.scene}>
        {description}
        <List containerStyle={styles.listContainer}>{items}</List>
      </ScrollView>
    )
  }
}

const RepositoryContainer = createFragmentContainer(Repository, {
  repository: graphql`
    fragment RepositoryScreen_repository on Repository {
      description
      id
      isFork
      name
      owner {
        __typename
        login
      }
      parent {
        id
        nameWithOwner
      }
      stargazers {
        totalCount
      }
      viewerHasStarred
    }
  `,
})

export default class RepositoryScreen extends Component<{
  navigation: Object,
}> {
  static navigationOptions = ({ navigation }: Object) => ({
    headerLeft: (
      <View style={sharedStyles.headerLeft}>
        <Icon
          name="chevron-left"
          type="octicon"
          color="white"
          underlayColor="black"
          onPress={() => navigation.goBack()}
          style={sharedStyles.headerIcon}
        />
      </View>
    ),
    title: navigation.state.params.name,
  })

  props: {
    navigation: Object,
  }

  render() {
    return (
      <ScreenRenderer
        container={RepositoryContainer}
        navigation={this.props.navigation}
        query={graphql`
          query RepositoryScreenQuery($id: ID!) {
            repository: node(id: $id) {
              ...RepositoryScreen_repository
            }
          }
        `}
        variables={{
          id: this.props.navigation.state.params.id,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 0,
  },
})
