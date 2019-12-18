import React, { useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, TextInput, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';

const TicketAddScreen = props => {

  const [assetId, setAssetId] = useState('');
  const [numberOfVotes, setNumberOfVotes] = useState('');
  const [description, setDescription] = useState('');
  const [assetIdValid, setAssetIdValid] = useState(false);
  const [numberOfVotesValid, setNumberOfVotesValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const addTicketHandler = () => {
    if (assetIdValid && numberOfVotesValid && descriptionValid) {
      //posten maar
    } else {
      Alert.alert(
        'Invalid Ticket',
        'The ticket details are invalid',
        [{ text: 'Ok', style: 'destructive' }]
      );
    }
  };

  const assetChangedHandler = text => {

    if (text) {
      setAssetIdValid = false;
    } else {
      text => setAssetId(text);
      setAssetIdValid = true;
    }
  }

  return (<View>
    <Header title="Add Ticket" />
    <View style={styles.inputContainter}>
      <Text>assetId</Text>
      <TextInput
        onChangeText={assetChangedHandler}
        value={assetId}
      />
      {!assetIdValid && <Text>please enter a valid asset id!</Text>}
    </View>
    <View style={styles.inputContainter}>
      <Text>votes</Text>
      <TextInput
        onChangeText={text => setNumberOfVotes(text)}
        value={numberOfVotes} />
    </View>
    <View style={styles.inputContainter}>
      <Text>description</Text>
      <TextInput
        onChangeText={text => setDescription(text)}
        value={description} />
    </View>
    <Button title="ADD" onPress={addTicketHandler} />
  </View>);
};

const styles = StyleSheet.create({
  inputContainter: {

  }
});

TicketAddScreen.propTypes = {};

export default connect(null, {})(TicketAddScreen);
