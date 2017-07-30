// @flow

import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Icon, List, ListItem, Text } from 'react-native-elements'
import { createFragmentContainer, graphql } from 'react-relay'

import ScreenRenderer from './ScreenRenderer'
import sharedStyles from './styles'

import type { HomeScreen_repository as Repository } from './__generated__/HomeScreen_repository.graphql'
import type { HomeScreen_viewer as Viewer } from './__generated__/HomeScreen_viewer.graphql'

type RepositoryItemProps = {
  navigation: Object,
  repository: Repository,
}

const RepositoryItem = ({ navigation, repository }: RepositoryItemProps) =>
  <ListItem
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
  viewer: Viewer,
}

const Home = ({ navigation, viewer }: HomeProps) => {
  const repositories = viewer.repositories.nodes.length
    ? viewer.repositories.nodes.map(r =>
        <RepositoryItemContainer
          key={r.id}
          navigation={navigation}
          repository={r}
        />,
      )
    : <View style={sharedStyles.mainContents}>
        <Text h3>No repository!</Text>
      </View>

  return (
    <ScrollView style={sharedStyles.scene}>
      {repositories}
    </ScrollView>
  )
}

const HomeContainer = createFragmentContainer(Home, {
  viewer: graphql`
    fragment HomeScreen_viewer on User {
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          ...HomeScreen_repository
          id
        }
      }
    }
  `,
})

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
        query={graphql`
          query HomeScreenQuery {
            viewer {
              ...HomeScreen_viewer
            }
          }
        `}
      />
    )
  }
}
