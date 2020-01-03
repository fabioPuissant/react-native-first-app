import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Coordinates from '../constants/Coordinates';

const MapScreen = props => {

    let userLocation
    if (props.navigation.getParam('location')) {
        userLocation = props.navigation.getParam('location');
    }


    const mapRegion = {
        latitude: Coordinates.PXLCoordinates.latitude,
        longitude: Coordinates.PXLCoordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };




    return (
        <MapView style={styles.map} region={mapRegion} >
            {userLocation ? <Marker title="ME" coordinate={userLocation}></Marker> : null}
            <Marker title="ISPACE" coordinate={Coordinates.ISpaceCoordinates}></Marker>
            <Marker title="PXL" coordinate={Coordinates.PXLCoordinates}></Marker>
        </MapView>);
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default MapScreen;