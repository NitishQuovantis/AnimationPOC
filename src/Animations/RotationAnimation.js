import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import Styles from './styles';

export class RotationAnimation extends Component {
  state = {
    animate: new Animated.Value(0),
  };

  animate = () => {
    Animated.timing(this.state.animate, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      this.state.animate.setValue(0);
    });
  };

  render() {
    const rotationInterpolation = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity onPress={this.animate}>
          <Animated.View
            style={[
              Styles.boxStyle,
              {transform: [{rotate: rotationInterpolation}]},
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
