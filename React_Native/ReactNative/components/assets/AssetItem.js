import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { getTickets } from '../../redux/actions/ticketActions';

const AssetItem = ({ ticket: { tickets }, asset, navigation, getTickets }) => {
  const [displayTickets, setDisplayTickets] = useState(null);
  useEffect(() => {
    getTickets(asset.id);
  }, []);

  useEffect(() => {
    const filtered = tickets.filter(t => t.assetId === asset.id);
    setDisplayTickets(filtered);
  }, [tickets]);

  const handleAssetNavigation = () => {
    navigation.navigate('AssetScreen');
  };

  return (
    <Card style={styles.item}>
      <Card.Title title={'Asset: ' + asset.id} />
      <Card.Content>
        <Title>{'name: ' + asset.name}</Title>
        <Title>
          {'tickets: ' + (displayTickets ? displayTickets.length : 0)}
        </Title>
      </Card.Content>
      <Card.Actions>
        <Button title='See Tickets' />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
const mapStateToProps = state => ({
  ticket: state.ticket
});
export default connect(mapStateToProps, { getTickets })(AssetItem);
