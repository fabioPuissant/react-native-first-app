import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const TicketItem = ({ ticket, navigation }) => {
  const handleTicketNavigation = () => {
    navigation.navigate('Tickets', { ticketParam: ticket });
  };

  return (
    <Card style={styles.mgnV}>
      <Card.Content>
        <Title>{'Ticket: ' + ticket.description} </Title>

        <View style={styles.row}>
          <Paragraph>{'Votes: ' + ticket.numberOfVotes}</Paragraph>
          <View style={styles.imgContainer}>
            <Image
              fadeDuration={400}
              source={{
                uri:
                  'https://banner2.cleanpng.com/20180621/clf/kisspng-2018-dokomi-computer-icons-ticket-film-icon-design-5b2bc14a32d119.1198346815295941862082.jpg'
              }}
              style={styles.image}
              resizeMode='cover'
            />
          </View>
        </View>
      </Card.Content>

      <Card.Actions>
        <View style={styles.fixToText}>
          <Button
            style={styles.button}
            color='#3471eb'
            icon='information-outline'
            mode='contained'
            onPress={handleTicketNavigation}
          >
            Ticket Details
          </Button>
        </View>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  mgnV: {
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  centerText: {
    justifyContent: 'center'
  },
  fixToText: {
    flexDirection: 'row'
  },
  button: {
    margin: 5
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    borderRadius: 190,
    borderWidth: 3,
    borderColor: '#FFF',
    width: 50,
    height: 50,
    marginHorizontal: 15,
    overflow: 'hidden',
    marginVertical: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TicketItem;
