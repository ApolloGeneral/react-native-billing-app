import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyContext } from './src/context';

class App extends Component {
  static contextType= MyContext;
  render(){
    return (
      <View style={styles.container}>
        <Text>creating something</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;