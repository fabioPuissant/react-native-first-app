import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Chip, withTheme, Button, Card } from 'react-native-paper';
import { setCurrentRoom } from '../../redux/actions/roomActions';

const RoomItem = props => {
  const { colors } = props.theme;
  return (
    <Card style={styles.mgnV}>
      <View style={styles.centerText}>
        <Card.Title
          title={'Room: ' + props.room.id}
          subtitle={props.room.name}
        />
        <View style={styles.chipContainer}>
          <Chip icon='information'>
            {'Happiness Score: ' + props.room.happinessScore}
          </Chip>
        </View>
      </View>

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
  },
  chipContainer: {
    flex: 1,
    alignItems: 'flex-end',
    top: 5,
    right: 5,
    position: 'absolute'
  }
});

export default connect(null, { setCurrentRoom })(withTheme(RoomItem));
