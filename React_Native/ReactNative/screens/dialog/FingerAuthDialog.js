import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Button,
  Image,
  Platform
} from 'react-native';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import Constants from 'expo-constants';
import * as LocalAuthentication from 'expo-local-authentication';

const FingerAuthDialog = ({ addHappinessToRoom }) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [failedCount, setFailedCount] = React.useState(0);

  const clearState = () => {
    setAuthenticated(false);
    setFailedCount(0);
  };

  const scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      if (results.success) {
        setAuthenticated(true);
        setModalVisable(true);
        setFailedCount(0);
        addHappinessToRoom();
      } else {
        setFailedCount(failedCount + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View
      style={[
        styles.container,
        modalVisible
          ? { backgroundColor: '#b7b7b7' }
          : { backgroundColor: 'white' }
      ]}
    >
      <Button
        title={
          authenticated
            ? 'Reset and begin Authentication again'
            : 'Begin Authentication'
        }
        onPress={() => {
          clearState();
          if (Platform.OS === 'android') {
            setModalVisible(!modalVisible);
          } else {
            scanFingerPrint();
          }
        }}
      />

      {authenticated && (
        <Text style={styles.text}>Authentication Successful! 🎉</Text>
      )}

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
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={{ color: 'red', fontSize: 16 }}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FingerAuthDialog;
