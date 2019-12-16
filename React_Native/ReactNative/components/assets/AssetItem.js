import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const AssetItem = ({ tickets, asset, navigation }) => {
  const [displayTickets, setDisplayTickets] = useState(null);

  useEffect(() => {
    const filtered = tickets.filter(t => t.assetId === asset.id);
    setDisplayTickets(filtered);
  }, [tickets]);

  const handleAssetNavigation = () => {
    navigation.navigate('AssetScreen');
  };

  return (
    <View style={styles.item}>
      <Card.Title title={'Asset: ' + asset.id} />
      <Card.Content>
        <Paragraph>{'Name: ' + asset.name}</Paragraph>
        <Paragraph>
          {'Tickets: ' + (displayTickets ? displayTickets.length : 0)}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title='See Tickets' />
      </Card.Actions>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 250,
    backgroundColor: 'pink'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imgContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 75,
    height: 75,
    marginHorizontal: 15,
    overflow: 'hidden',
    marginVertical: 20
  }
});

export default AssetItem;
