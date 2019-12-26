import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Platform, StyleSheet, TextInput } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { addHapinessScore } from '../../redux/actions/roomActions';

const AddHappinessScoreDialog = ({
  dialogShow,
  setDialogShow,
  addHapinessScore,
  roomName
}) => {
  const [score, setScore] = useState(0);

  const addHappinessToRoom = () => {
    addHapinessScore({ roomName, score });
    setDialogShow(false);
  };
  return (
    <View>
      <Portal>
        <Dialog visible={dialogShow} onDismiss={() => setDialogShow(false)}>
          <Dialog.Title>Add Happiness Score to {roomName}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Enter a happiness score for this room.</Paragraph>
            <TextInput
              placeholder='Enter score here ...'
              underlineColorAndroid='transparent'
              numeric
              keyboardType={'number-pad'}
              onChangeText={setScore}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => addHappinessToRoom()}>Done</Button>
            <Button onPress={() => setDialogShow(false)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

AddHappinessScoreDialog.propTypes = {};

export default connect(null, { addHapinessScore })(AddHappinessScoreDialog);
