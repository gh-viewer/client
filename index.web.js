import { AppRegistry } from 'react-native'
import Octicons from 'react-native-vector-icons/Fonts/Octicons.ttf'

import GHViewer from './src/components/HomeScreen'

const style = document.createElement('style')
style.type = 'text/css'
style.appendChild(
  document.createTextNode(
    `@font-face { src: url(${Octicons}); font-family: "Octicons"; }`,
  ),
)
document.head.appendChild(style)

AppRegistry.registerComponent('GHViewer', () => GHViewer)
AppRegistry.runApplication('GHViewer', {
  rootTag: document.getElementById('root'),
})
