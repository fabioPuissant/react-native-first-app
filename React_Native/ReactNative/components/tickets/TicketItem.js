import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const TicketItem = ({ ticket, navigation }) => {

    const handleTicketNavigation = () => {
        navigation.navigate('TicketScreen')

        const [upvotes, setUpvotes] = useState("");

        const upvoteHandler = () => {

        }

        return (
            <Card style={styles.mgnV}>
                <Card.Title title={'Ticket: ' + ticket.id} />
                <Card.Content>
                    <Title>{'Votes: ' + ticket.numberOfVotes}</Title>
                    <Paragraph>{ticket.description}</Paragraph>
                </Card.Content>

                <Card.Actions>
                    <Button
                        onPress={handleTicketNavigation}
                        title="Ticket Details" />

                    <Button
                        onPress={upvoteHandler}
                        title="Upvote" />
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

    //TODO: export
}

export default TicketItem;