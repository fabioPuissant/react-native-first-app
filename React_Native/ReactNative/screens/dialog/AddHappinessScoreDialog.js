import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Platform,
  StyleSheet,
  TextInput,
  Modal,
  TouchableHighlight,
  Image,
  Text
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { addHapinessScore } from '../../redux/actions/roomActions';
import * as Animated from 'react-native-animatable';
import styles from '../screenStyles';

const AddHappinessScoreDialog = ({
  dialogShow,
  setDialogShow,
  addHapinessScore,
  roomName
}) => {
  const [score, setScore] = useState(0);
  const [authenticated, setAuthenticated] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [failedCount, setFailedCount] = React.useState(0);

  const clearState = () => {
    setAuthenticated(false);
    setModalVisible(false);
    setFailedCount(0);
  };

  const scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
        setAuthenticated(true);
        setModalVisible(false);
        setFailedCount(0);

        addHappinessToRoom();
      } else {
        setFailedCount(failedCount + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addHappinessToRoom = () => {
    addHapinessScore({ roomName, score });
    setDialogShow(false);
  };

  return (
    <View>
      <Portal>
        <Dialog visible={dialogShow}>
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
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onShow={() => scanFingerPrint()}
            >
              <View style={styles.modal}>
                <View style={styles.innerContainer}>
                  <Text>Confirm with fingerprint</Text>
                  {failedCount > 0 && (
                    <Text style={{ color: 'red', fontSize: 14 }}>
                      Failed to authenticate, press cancel to try again.
                    </Text>
                  )}
                  <TouchableHighlight
                    onPress={async () => {
                      LocalAuthentication.cancelAuthenticate();
                      setModalVisible(false);
                    }}
                  >
                    <Text style={{ color: 'red', fontSize: 16 }}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </Dialog.Content>

          <Dialog.Actions>
            <Button
              onPress={() => {
                clearState();
                if (Platform.OS === 'android') {
                  setModalVisible(!modalVisible);
                } else {
                  scanFingerPrint();
                }
              }}
            >
              Confirm
            </Button>
            <Button onPress={() => setDialogShow(false)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

AddHappinessScoreDialog.propTypes = {};

export default connect(null, { addHapinessScore })(AddHappinessScoreDialog);
