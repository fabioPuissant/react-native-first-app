import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Coordinates from '../../constants/Coordinates';

const MapPreview = props => {
    let ImagePreviewUrl;

    if (props.location) {
        ImagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x800&maptype=roadmap&markers=color:red%7Clabel:M%7C${props.location.lat},${props.location.lng}&markers=color:blue%7Clabel:S%7C${Coordinates.ISpaceCoordinates.latitude},${Coordinates.PXLCoordinates.longitude}&markers=color:blue%7Clabel:P%7C${Coordinates.PXLCoordinates.latitude},${Coordinates.PXLCoordinates.longitude}&key=AIzaSyAJWxSkPqRQDJjZRx0NPknPQCqvDurFU2Y`;
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...styles.mapPreview, ...props.style }}>
            {props.location ? (<Image style={styles.mapImage} source={{ uri: ImagePreviewUrl }} />) : props.children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
});

export default MapPreview;