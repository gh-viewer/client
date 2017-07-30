import { StackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'
import RepositoryScreen from './RepositoryScreen'

export default StackNavigator(
  {
    Home: { screen: HomeScreen },
    Repository: { screen: RepositoryScreen },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#24292e',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
)
