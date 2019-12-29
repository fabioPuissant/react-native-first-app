import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centerHoriz: {
    padding: 20
  },
  mgnV: {
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerText: {
    justifyContent: 'center'
  },
  fixToText: {
    flexDirection: 'row'
  },
  button: {
    margin: 5
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    borderRadius: 190,
    borderWidth: 3,
    borderColor: '#FFF',
    width: 50,
    height: 50,
    marginHorizontal: 15,
    overflow: 'hidden',
    marginVertical: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    margin: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addTicketButton: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 25,
    overflow: 'hidden'
  },
  label: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    fontSize: 20,
  },
  input: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%'
  }
});