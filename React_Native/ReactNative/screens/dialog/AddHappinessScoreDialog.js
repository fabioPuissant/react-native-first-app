import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
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
