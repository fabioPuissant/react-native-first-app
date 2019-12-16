import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { setCurrentRoom } from '../../redux/actions/roomActions';

const RoomItem = props => {
  return (
    <Card style={styles.mgnV}>
      <View style={styles.centerText}>
        <Card.Title
          title={'Room: ' + props.room.id}
          subtitle={props.room.name}
        />
      </View>
      <Card.Content>
        <Paragraph>{'Happiness Score: ' + props.room.happinessScore}</Paragraph>
      </Card.Content>
      {props.room.imageUrl ? (
        <Card.Cover
          source={{
            uri: props.room.imageUrl
          }}
        />
      ) : (
        <View></View>
      )}

      <Card.Actions>
        <Button
          onPress={() => {
            props.setCurrentRoom(props.room);
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
  },
  centerText: {
    justifyContent: 'center'
  }
});

export default connect(null, { setCurrentRoom })(RoomItem);
