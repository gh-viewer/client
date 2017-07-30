// @flow

import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
import { createFragmentContainer, graphql } from 'react-relay'

import ScreenRenderer from './ScreenRenderer'
import sharedStyles from './styles'

import type { RepositoryScreen_repository as RepositoryType } from './__generated__/HomeScreen_viewer.graphql'

const Repository = ({ repository }: { repository: RepositoryType }) => {
  return (
    <ScrollView style={sharedStyles.scene}>
      <View style={sharedStyles.mainContents}>
        <Text>
          Repository screen: {repository.owner.login}/{repository.name}
        </Text>
      </View>
    </ScrollView>
  )
}

const RepositoryContainer = createFragmentContainer(Repository, {
  repository: graphql`
    fragment RepositoryScreen_repository on Repository {
      name
      owner {
        login
      }
    }
  `,
})

export default class RepositoryScreen extends Component {
  static navigationOptions = ({ navigation }: Object) => ({
    headerLeft: (
      <Icon
        name="chevron-left"
        type="octicon"
        color="white"
        underlayColor="black"
        onPress={() => navigation.goBack()}
        style={sharedStyles.headerIcon}
      />
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
