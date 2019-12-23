import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const TicketItem = props => {

    const [upvotes, setUpvotes] = useState("");

    const upvoteHandler = () => {

    }

    return (
        <Card style={styles.mgnV}>
            <Card.Title title={'Ticket: ' + props.ticket.id} />
            <Card.Content>
                <Title>{'Votes: ' + props.ticket.numberOfVotes}</Title>
                <Paragraph>{props.ticket.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button
                    onPress={upvoteHandler}
                    title="Upvote" />
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({

});

export default TicketItem;