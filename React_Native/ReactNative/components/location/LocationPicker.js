import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'
import Colors from '../../constants/Colors'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapPreview from './MapPreview';

const LocationPicker = props => {
    const [pickedLocation, setPickedLocation] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted') {
            Alert.alert(
                'insufficient permissions',
                'you need to grant location permission in order to use this app',
                [{ text: 'ok' }]
            );
            return false
        }
        return true;
    }

    const pickOnMapHandler = () => {
        if (pickedLocation) {
            props.navigation.navigate({
                routeName: "Location",
                params: {
                    location: {
                        latitude: pickedLocation.lat,
                        longitude: pickedLocation.lng
                    }
                }
            });
        }
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }

        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
        } catch (err) {
            Alert.alert(
                'could not fetch location',
                'please try again later',
                [{ text: 'ok' }]
            );
        }
        setIsFetching(false);
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation} onPress={pickOnMapHandler}>
                {isFetching ? <ActivityIndicator size="large" color={Colors.primaryColor} /> : <Text>please share your location!</Text>}
            </MapPreview>
            <Button mode='contained' color={Colors.primaryColor} onPress={getLocationHandler} style={styles.button}>
                Where Am I?
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    button: {
        borderRadius: 25,
        margin: 5
    }
});

export default LocationPicker;