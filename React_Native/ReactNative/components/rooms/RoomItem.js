import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { Chip, withTheme, Button, Card } from 'react-native-paper';
import { clearCurrent, setCurrentRoom } from '../../redux/actions/roomActions';
import * as Animated from 'react-native-animatable';
import styles from './roomStyles';

const RoomItem = props => {
  const { colors } = props.theme;

  return (
    <Animated.View animation={'zoomIn'} iterationCount={1}>
      <Card style={styles.mgnV}>
        <View style={styles.centerText}>
          <Card.Title
            title={'Room: ' + props.room.id}
            subtitle={props.room.name}
          />
          <View style={styles.chipContainer}>
            <Chip icon='information' mode='outlined' style={styles.whiteBg}>
              <Text style={styles.greyText}>
                {'Happiness Score: ' + props.room.happinessScore}
              </Text>
            </Chip>
          </View>
        </View>

        {props.room.imageUrl ? (
          <Card.Cover
            source={{
              uri: props.room.imageUrl
            }}
          />
        ) : null}

        <Card.Actions>
          <Button
            onPress={() => {
              props.setCurrentRoom(props.room);
              props.navigation.navigate('Rooms');
            }}
          >
            See Assets
          </Button>
          <Button
            onPress={() => {
              props.setCurrentRoom(props.room);
              props.navigation.navigate('RoomMap');
            }}>
            See Location
          </Button>
        </Card.Actions>
      </Card>
    </Animated.View>
  );
};

export default connect(null, { clearCurrent, setCurrentRoom })(
  withTheme(RoomItem)
);
