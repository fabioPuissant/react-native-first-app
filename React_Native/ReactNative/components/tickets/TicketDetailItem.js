import React, { usState, useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from 'react-navigation-hooks';
import {
  upVoteTicket,
  setCurrentTicket,
  deleteTicket
} from '../../redux/actions/ticketActions';
import { NavigationEvents } from 'react-navigation';

const TicketDetailItem = ({
  ticket: { current },
  navigation,
  upVoteTicket,
  deleteTicket
}) => {
  const { navigate } = useNavigation();
  const [displayUpvotes, setDisplayUpvotes] = useState(current.numberOfVotes);

  const upvoteHandler = () => {
    upVoteTicket(current);
  };

  const removeTicket = () => {
    deleteTicket(current.id);
    navigate('Assets');
  };

  useEffect(() => {
    setDisplayUpvotes(current.numberOfVotes);
  }, [current]);

  return (
    <Card style={styles.mgnV}>
      <Card.Title title={'Ticket: ' + current.id} />
      <Card.Content>
        <View style={styles.row}>
          <Title>{'Votes: ' + displayUpvotes}</Title>
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
        <Paragraph>{current.description}</Paragraph>
      </Card.Content>

      <Card.Actions>
        <View style={styles.fixToText}>
          <Button
            style={styles.button}
            color='#3471eb'
            icon='arrow-up-bold'
            mode='contained'
            background-color='#4CAF50'
            onPress={upvoteHandler}
          >
            Upvote
          </Button>
          <Button
            style={styles.button}
            color='red'
            icon='delete'
            mode='contained'
            background-color='#4CAF50'
            onPress={removeTicket}
          >
            Delete
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

const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(mapStateToProps, {
  upVoteTicket,
  setCurrentTicket,
  deleteTicket
})(TicketDetailItem);
