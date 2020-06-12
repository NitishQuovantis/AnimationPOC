import React, {Component} from 'react';
import {Animated, View, TouchableWithoutFeedback, Alert} from 'react-native';
import Style from './styles';

export class OpacityAnimation extends Component {
  state = {
    opacity: new Animated.Value(1),
  };

  animate = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 1000,
    }).start(() => {
      this.state.opacity.setValue(1);
    });
  };

  render() {
    return (
      <View style={Style.containerStyle}>
        <TouchableWithoutFeedback onPress={this.animate}>
          <Animated.View
            style={[Style.boxStyle, {opacity: this.state.opacity}]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
