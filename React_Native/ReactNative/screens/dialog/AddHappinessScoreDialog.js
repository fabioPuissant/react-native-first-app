import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Platform, StyleSheet, TextInput } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const AddHappinessScoreDialog = props => {
  return (
    <View>
      <Portal>
        <Dialog
          visible={props.dialogShow}
          onDismiss={() => props.setDialogShow(false)}
        >
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
            <TextInput
              placeholder='Enter a happiness score for this room.'
              underlineColorAndroid='transparent'
              numeric
              value
              keyboardType={'number-pad'}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => props.setDialogShow(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

AddHappinessScoreDialog.propTypes = {};

export default connect()(AddHappinessScoreDialog);
