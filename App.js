import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppContainer from './src/Naviation/navigation';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppContainer />
      </View>
    );
  }
}

export default App;
