import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import Home from './screens/Home';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import ApplicationNavigator from './navigation/ApplicationNavigator';

const theme = {
  ...DefaultTheme,
  roundness: 2,

  dark: false
};

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <ApplicationNavigator />
        </View>
      </PaperProvider>
    </StoreProvider>
  );
}
AppRegistry.registerComponent('main', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
