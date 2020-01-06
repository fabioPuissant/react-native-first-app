import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from 'react-navigation-hooks';

const Header = props => {
  const { navigate } = useNavigation();
  return (
    <Appbar.Header>
      {props.goTo ? (
        <Appbar.BackAction onPress={() => navigate(props.goTo)} />
      ) : null}
      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
};

export default Header;
