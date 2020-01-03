import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import LocationPicker from '../components/location/LocationPicker';

const RoomMapScreen = props => {
    return (
        <LocationPicker navigation={props.navigation} />
    );
};

export default RoomMapScreen;
