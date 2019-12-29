import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Paragraph, Card, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { setCurrentAsset } from '../../redux/actions/assetActions';
import FadeView from '../../layout/FadeInView';
import styles from './assetStyles';

const AssetItem = ({
  tickets,
  asset,
  assetState: { current },
  navigation,
  index,
  setCurrentAsset
}) => {
  const [displayTickets, setDisplayTickets] = useState(null);

  useEffect(() => {
    const filtered = tickets.filter(t => t.assetId === asset.id);
    setDisplayTickets(filtered);
  }, [tickets]);

  const handleAssetNavigation = () => {
    setCurrentAsset(asset);
    navigation.navigate('Assets');
  };

  return (
    <View style={{ flex: 1 }}>
      <Card style={styles.item}>
        <FadeView style={styles.imgContainer}>
          <Image
            fadeDuration={400}
            source={{
              uri:
                'https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }}
            style={styles.image}
            resizeMode='cover'
          />
        </FadeView>
        <FadeView style={styles.whiteText}>
          <Title style={{ color: '#FFF', fontSize: 15 }}>{asset.name}</Title>

          <Paragraph style={styles.whiteText}>{'Id: ' + asset.id}</Paragraph>
          <Paragraph style={styles.whiteText}>
            {'Tickets: ' + (displayTickets ? displayTickets.length : 0)}
          </Paragraph>
        </FadeView>
        <FadeView>
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
        </FadeView>
      </Card>
    </View>
  );
};

const mapStateToProps = state => ({
  ticket: state.ticket,
  assetState: state.asset
});

export default connect(mapStateToProps, {
  setCurrentAsset
})(AssetItem);
