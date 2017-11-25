import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  statusBar: {
    ...Platform.select({
      ios: {
        backgroundColor: '#24292e',
        height: 20,
      },
    }),
  },
  scene: {
    backgroundColor: 'white',
    flex: 1,
  },
  fill: {
    flex: 1,
  },
  mainContents: {
    padding: 10,
  },
  centerContents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  headerIcon: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  headerLeft: {
    width: 50,
  },
})
