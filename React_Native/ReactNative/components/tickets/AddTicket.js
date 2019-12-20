import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Avatar } from 'react-native-paper';



const AddTicket = props => {
    const [description, setDescription] = useState('');

    const clearDescriptionHandler = () => {
        setDescription('');
    };

    const addTicketHandler = () => {
        Alert.alert('description', description, [{ text: 'ok' }]);
    }


    return (
        <Card style={styles.form}>
            <Card.Title style={styles.title} title="Add a ticket" left={(props) => <Avatar.Icon {...props} icon="checkbox-marked-circle-outline" />} />
            <Card.Content style={styles.descriptionContainer}>
                <Text style={styles.label}>please fill in a description</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    multiline={true}
                    numberOfLines={8}
                >
                </TextInput>
            </Card.Content>
            <Card.Actions>
                <Button style={styles.button} mode="contained" onPress={addTicketHandler}>
                    ADD TICKET
                </Button>
                <Button style={styles.button} mode="contained" onPress={clearDescriptionHandler}>
                    CLEAR
            </Button>
            </Card.Actions>
        </Card>
    );
};


const styles = StyleSheet.create({
    descriptionContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        margin: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 25,
        overflow: 'hidden'
    },
    label: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        fontSize: 20,
    },
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%'
    }
});

AddTicket.propTypes = {};

//export default connect(null, {})(AddTicket);
export default AddTicket;