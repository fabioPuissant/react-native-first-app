import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import setCurrentRoom from '../../redux/actions/roomActions';
import { Text } from 'react-native';

const RoomItem = ({ room }) => {
  return (
    <Card style={styles.mgnV}>
      <Card.Title title={'Room: ' + room.id} />
      <Card.Content>
        <Title>{room.name}</Title>
        <Paragraph>{'Happiness Score: ' + room.happinessScore}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>See Assets</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  mgnV: {
    marginVertical: 20
  }
});

export default connect(null, { setCurrentRoom })(RoomItem);
