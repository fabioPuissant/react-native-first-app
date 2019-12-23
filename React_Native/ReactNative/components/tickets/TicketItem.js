import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const TicketItem = ({ ticket, navigation }) => {

    const handleTicketNavigation = () => {
        navigation.navigate('TicketScreen')
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
export default TicketItem;