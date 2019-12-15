import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import setCurrentRoom from '../../redux/actions/roomActions';
import { Text } from 'react-native';

const RoomItem = props => {
  return (
    <Card style={styles.mgnV}>
      <Card.Title title={'Room: ' + props.room.id} />
      <Card.Content>
        <Title>{props.room.name}</Title>
        <Paragraph>{'Happiness Score: ' + props.room.happinessScore}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            props.navigation.navigate('RoomScreen');
          }}
        >
          See Assets
        </Button>
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
