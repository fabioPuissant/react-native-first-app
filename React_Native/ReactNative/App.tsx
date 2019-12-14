import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import Home from './screens/Home';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <Home />
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
