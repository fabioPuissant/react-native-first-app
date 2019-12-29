import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  whiteText: {
    color: '#FFF'
  },
  ticketButton: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    padding: 5
  },

  item: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E00EA',
    borderRadius: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    borderRadius: 190,
    borderWidth: 3,
    borderColor: '#FFF',
    width: 95,
    height: 95,
    marginHorizontal: 15,
    overflow: 'hidden',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomBtn: {
    bottom: 15,
    color: '#FFF'
  },
  container: { padding: 20, flex: 1 }
});