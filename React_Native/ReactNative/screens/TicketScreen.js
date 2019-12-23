import React from 'react';
import { View, StyleSheet } from 'react-native';
import TicketList from '../components/tickets/TicketList';
import Header from '../layout/Header';

const TicketScreen = props => {

    return (
        <View>
            <TicketList />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TicketScreen;