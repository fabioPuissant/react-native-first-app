import React, { useEffect, useState } from 'react';
import { Text, FlatList, Image, View, StyleSheet } from 'react-native';
import { Banner, Button, Title } from 'react-native-paper';

import { connect } from 'react-redux';
import Header from '../layout/Header';
import AssetGrid from '../components/assets/AssetGrid';

import {
  setCurrentAsset,
  findAssetsOfRoom,
  clearCurrentAsset
} from '../redux/actions/assetActions';

const RoomScreen = ({
  navigation,
  room: { current },
  asset: { assets },
  findAssetsOfRoom
}) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    findAssetsOfRoom(current);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title={`Room Details`} navigation={navigation} />
      {!show ? (
        <Button onPress={() => setShow(true)}>Show room detail</Button>
      ) : null}

      {show ? (
        <Banner
          visible={show}
          style={{ marginBottom: 10 }}
          actions={[
            {
              label: 'Hide',
              onPress: () => setShow(false)
            },
            {
              label: ''
            },
            {
              label: ''
            }
          ]}
          icon={({ size }) => (
            <Image
              source={{
                uri: current.imageUrl
              }}
              style={{
                width: size,
                height: size
              }}
            />
          )}
        >
          <Text>
            {current.name}
            {'\n'}
          </Text>
          <Text>
            The Happiness score of this room is: {current.happinessScore}
          </Text>
        </Banner>
      ) : null}
      <View style={styles.center}>
        {assets && assets.length !== 0 ? (
          <Title style={styles.purpleText}>
            These are the assets of this room
          </Title>
        ) : (
            <Title style={styles.purpleText}>This room has no assets</Title>
          )}
      </View>

      {!assets && assets.length === 0 ? (
        <Text>No Assets found</Text>
      ) : (
          <AssetGrid assets={assets} navigation={navigation} />
        )}
    </View>
  );
};
RoomScreen.navigationOptions = {
  headerTitle: 'Home screen'
};
RoomScreen.propTypes = {};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleText: {
    color: '#5E00EA'
  }
});

const mapStateToProps = state => ({
  asset: state.asset,
  room: state.room
});

export default connect(mapStateToProps, {
  clearCurrentAsset,
  setCurrentAsset,
  findAssetsOfRoom
})(RoomScreen);
