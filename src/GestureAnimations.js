import React, {Component} from 'react';
import {ScrollView, Button, Text} from 'react-native';

export default class GestureAnimations extends Component {
  static navigationOptions = {
    title: 'Core Example',
  };

  navigate = page => {
    this.props.navigation.navigate(page);
  };

  render() {
    return (
      <ScrollView style={{flex: 1, margin: 20}}>
        <Button
          title="Simple Gesture Animation"
          onPress={() => {
            this.props.navigation.navigate('SimpleGestureAnimation');
          }}
        />

        <Button
          title={'Pinch and zoom'}
          onPress={() => {
            this.navigate('PinchZoom');
          }}
        />
      </ScrollView>
    );
  }
}
