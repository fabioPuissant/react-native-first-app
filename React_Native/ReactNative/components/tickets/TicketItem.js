import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './ticketStyles';
import { View, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

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

export default connect(null, { deleteTicket })(TicketItem);
