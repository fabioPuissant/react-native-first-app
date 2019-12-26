import React, { useEffect, useState } from 'react';
import { Text, FlatList, Image, View, StyleSheet } from 'react-native';
import { Banner, Button, Title } from 'react-native-paper';

import { connect } from 'react-redux';
import Header from '../layout/Header';
import AssetGrid from '../components/assets/AssetGrid';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import AddHappinessScoreDialog from './dialog/AddHappinessScoreDialog';

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
  const [dialogShow, setDialogShow] = useState(false);

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
              label: 'Add happiness',
              onPress: () => setDialogShow(true)
            },

            {
              label: ''
            },
            {
              label: 'Hide',
              onPress: () => setShow(false)
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
      <AddHappinessScoreDialog
        dialogShow={dialogShow}
        setDialogShow={setDialogShow}
      />

      {!assets && assets.length === 0 ? (
        <Text>No Assets found</Text>
      ) : (
        <AssetGrid assets={assets} navigation={navigation} />
      )}
    </View>
  );
};
RoomScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Rooms',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
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
