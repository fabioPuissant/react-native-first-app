import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Paragraph, Card, Button } from 'react-native-paper';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../../redux/actions/assetActions';

const AssetItem = ({ tickets, asset, navigation, index, setCurrentAsset }) => {
  const [displayTickets, setDisplayTickets] = useState(null);

  useEffect(() => {
    const filtered = tickets.filter(t => t.assetId === asset.id);
    setDisplayTickets(filtered);
  }, [tickets]);

  const handleAssetNavigation = () => {
    setCurrentAsset(asset);
    navigation.navigate('AssetScreen');
  };

  return (
    <Card style={[styles.item, index % 2 === 0 ? styles.even : styles.odd]}>
      <View style={styles.imgContainer}>
        <Image
          fadeDuration={400}
          source={{
            uri:
              'https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.whiteText}>
        <Title style={{ color: '#FFF', fontSize: 15 }}>{asset.name}</Title>

        <Paragraph style={styles.whiteText}>{'Id: ' + asset.id}</Paragraph>
        <Paragraph style={styles.whiteText}>
          {'Tickets: ' + (displayTickets ? displayTickets.length : 0)}
        </Paragraph>
      </View>
      <Card.Actions>
        <Button
          mode={'contained'}
          labelStyle={styles.ticketButton}
          compact={true}
          onPress={handleAssetNavigation}
        >
          See tickets
      </Button>
      </Card.Actions>
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
