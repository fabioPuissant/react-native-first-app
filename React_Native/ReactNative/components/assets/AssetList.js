import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Header from '../../layout/Header';
import AssetItem from './AssetItem';

const getAssets = (roomId) => {
    return fetch('localhost/assets')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.find(asset => asset.roomId == roomId);
        })
        .catch((error) => {
            console.log(error);
        })
}

const AssetList = () => {
    return (
        <View>
            <Header title="Assets from roomx" />
            <FlatList>
                data={getAssets(1)}
                renderItem={({ ticket }) => <AssetItem
                    id={asset.id}
                    name={asset.name}
                    roomId={asset.roomId} />}
                keyExtractor={asset => asset.id}>

            </FlatList>
        </View>
    )
}

export default AssetList;
