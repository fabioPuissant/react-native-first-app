import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

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
      <View style={styles.imgContainer}>
        <Image
          fadeDuration={400}
          //source={require('../assets/success.png')}
          source={{
            uri:
              'https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>

      <Title>{asset.name}</Title>

      <Paragraph>{'Id: ' + asset.id}</Paragraph>
      <Paragraph>
        {'Tickets: ' + (displayTickets ? displayTickets.length : 0)}
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 250,
    alignItems: 'center'
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
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AssetItem;
