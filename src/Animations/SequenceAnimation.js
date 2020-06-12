import React, {Component} from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
import Styles from './styles';

export class SequenceAnimation extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
    bounceAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    this.state.bounceAnimation.addListener(({value}) => {
      console.log(value);
      this._ref.setNativeProps({
        style: {
          transform: [{translateY: -100 * Math.abs(Math.sin(4 * value))}],
        },
      });
    });
  }

  animate = () => {
    Animated.sequence([
      Animated.timing(this.state.bounceAnimation, {
        toValue: 3.14,
        duration: 5000,
      }),

      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500,
      }),

      Animated.timing(this.state.scaleAnimation, {
        toValue: 10,
        duration: 500,
      }),
    ]).start(() => {
      this.state.colorAnimation.setValue(0);
      this.state.scaleAnimation.setValue(1);
      this.state.bounceAnimation.setValue(0);
    });
  };

  render() {
    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity onPress={this.animate}>
          <Animated.View
            ref={ref => {
              this._ref = ref;
            }}>
            <Animated.View style={this.getBoxStyle()} />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }

  getBoxStyle = () => {
    const colorInterpolation = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,0,0)', 'rgb(0,255,0)'],
    });

    const animatedStyle = {
      backgroundColor: colorInterpolation,
      transform: [{scale: this.state.scaleAnimation}],
      borderRadius: 50,
    };

    return [Styles.boxStyle, animatedStyle];
  };
}
