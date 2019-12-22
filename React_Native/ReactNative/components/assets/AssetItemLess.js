import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Paragraph, Card, Button } from 'react-native-paper';

const AssetItem = ({ tickets, asset, navigation, index }) => {
    const [displayTickets, setDisplayTickets] = useState(null);

    useEffect(() => {
        const filtered = tickets.filter(t => t.assetId === asset.id);
        setDisplayTickets(filtered);
    }, [tickets]);

    const handleAssetNavigation = () => {
        navigation.navigate('AssetScreen');
    };

    return (
        <Card style={[styles.item, index % 2 === 0 ? styles.even : styles.odd]}>
            <View style={styles.imgContainer}>
            </View>
            <View style={styles.whiteText}>
                <Title style={{ color: '#FFF', fontSize: 15 }}>{asset.name}</Title>

                <Paragraph style={styles.whiteText}>{'Id: ' + asset.id}</Paragraph>
                <Paragraph style={styles.whiteText}>
                    {'Tickets: ' + (displayTickets ? displayTickets.length : 0)}
                </Paragraph>
            </View>
            <Button
                mode={'contained'}
                labelStyle={styles.ticketButton}
                compact={true}
                onPress={() => { navigation.navigate('TicketAddScreen') }}
            >
                add ticket
      </Button>
        </Card>
    );
};

const styles = StyleSheet.create({
    even: {
        bottom: 20
    },
    whiteText: {
        color: '#FFF'
    },
    ticketButton: {
        fontSize: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        padding: 5
    },
    odd: {},
    item: {
        flex: 1,
        margin: 15,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5E00EA',
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imgContainer: {
        borderRadius: 190,
        borderWidth: 3,
        borderColor: '#FFF',
        width: 95,
        height: 95,
        marginHorizontal: 15,
        overflow: 'hidden',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBtn: {
        bottom: 15,
        color: '#FFF'
    }
});

export default AssetItem;
