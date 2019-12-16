import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const AssetItem = props => {
  const handleAssetNavigation = () => {
    props.navigation.navigate('');
  };

  return (
    <Card style={styles.item}>
      <Card.Title title={'Asset: ' + props.asset.id} />
      <Card.Content>
        <Title>{'name: ' + props.asset.name}</Title>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleTicketNavigation} title='See Tickets' />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 20
  }
});
