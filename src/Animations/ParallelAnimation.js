import React, {Component} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import Styles from './styles';

export class ParallelAnimation extends Component {
  state = {
    scaleAnimation: new Animated.Value(1),
    colorAnimation: new Animated.Value(0),
  };

  animate = () => {
    Animated.parallel([
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 1000,
      }),

      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start(() => {
      this.state.scaleAnimation.setValue(1);
      this.state.colorAnimation.setValue(0);
    });
  };

  render() {
    const colorInterpolator = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,0,0)', 'rgb(0,255,0)'],
    });

    const animatedStyle = {
      backgroundColor: colorInterpolator,
      transform: [{scale: this.state.scaleAnimation}],
    };

    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity onPress={this.animate}>
          <Animated.View style={[Styles.boxStyle, animatedStyle]} />
        </TouchableOpacity>
      </View>
    );
  }
}
