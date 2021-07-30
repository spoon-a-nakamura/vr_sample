import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class new_react_360_app extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Welcome to iREX2022 online</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Bebas Neue',
  },
});

AppRegistry.registerComponent('new_react_360_app', () => new_react_360_app);
