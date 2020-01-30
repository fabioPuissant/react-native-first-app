import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  flex: { flex: 1 },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleText: {
    color: '#5E00EA'
  },
  view: {
    flex: 1,
    backgroundColor: '#e6f2ff'
  },
  fab: {
    position: 'absolute',
    margin: 20,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  modal: {
    flex: 1,
    marginTop: '90%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    marginTop: '30%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    fontSize: 22,
    paddingTop: 20
  }
});
