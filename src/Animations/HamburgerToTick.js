import React, {Component} from 'react';
import {StyleSheet, View, Animated, Button, Easing} from 'react-native';
import Styles from './styles';

export class HamburgerToTick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: new Animated.Value(0),
      line2: new Animated.Value(0),
      line3: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    const {line1, line2, line3} = this.state;

    Animated.parallel([
      this.getAnimation(line1),
      this.getAnimation(line2),
      this.getAnimation(line3),
      Animated.delay(3000),
    ]).start(() => {
      line1.setValue(0);
      line2.setValue(0);
      line3.setValue(0);
    });
  };

  getAnimation = animation => {
    return Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
    });
  };

  getLine1AnimationStyle = () => {
    const {line1} = this.state;

    const widthInterpolation = line1.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 25],
    });

    const rotationInterpolation = line1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '80deg'],
    });

    const topTransform = line1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10],
    });

    return [
      localStyle.lineStyle,
      {
        width: widthInterpolation,
        transform: [
          {rotate: rotationInterpolation},
          {translateY: topTransform},
        ],
      },
    ];
  };

  getLine2AnimationStyle = () => {
    const {line2} = this.state;

    const opacityInterpolation = line2.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    return [
      localStyle.lineStyle,
      {
        opacity: opacityInterpolation,
      },
    ];
  };

  getLine3AnimationStyle = () => {
    const {line3} = this.state;

    const rotationInterpolation = line3.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-15deg'],
    });

    const translateTop = line3.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -13],
    });

    const translateLeft = line3.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 6],
    });

    return [
      localStyle.lineStyle,
      {
        transform: [
          {rotate: rotationInterpolation},
          {translateY: translateTop},
          {translateX: translateLeft},
        ],
      },
    ];
  };

  render() {
    const line1Style = this.getLine1AnimationStyle();
    const line2Style = this.getLine2AnimationStyle();
    const line3Style = this.getLine3AnimationStyle();

    return (
      <View style={Styles.contentStyle}>
        <Animated.View style={line1Style} />
        <Animated.View style={line2Style} />
        <Animated.View style={line3Style} />

        <Button
          title={'Start Animation'}
          onPress={() => {
            this.startAnimation();
          }}
        />
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  lineStyle: {
    width: 50,
    height: 5,
    backgroundColor: 'red',
    marginTop: 5,
  },
});
