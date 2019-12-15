import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

const getTickets = (AssetId) => {
    return fetch('localhost/tickets')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.find(ticket => ticket.assetId == assetId);
        })
        .catch((error) => {
            console.log(error);
        })
}

function Ticket({ id, assetId, numberOfVotes, description }) {
    return (
        <TouchableOpacity>
            <Text>{id}</Text>
            <Text>{assetId}</Text>
            <Text>{numberOfVotes}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    );
}

export default function TicketList() {
    return (
        <View>
            <Header title="Tickets from AssetX" />
            <FlatList
                data={getTickets(1)}
                renderItem={({ ticket }) => <Ticket
                    id={ticket.id}
                    assetId={ticket.description}
                    numberOfVotes={ticket.numberOfVotes}
                    description={ticket.description} />}
                keyExtractor={ticket => ticket.id}>

            </FlatList>
        </View>
    )
}