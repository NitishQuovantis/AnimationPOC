import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width - 100;

export class EasingDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linearEasing: new Animated.Value(0),
      circleEasing: new Animated.Value(0),
      ease: new Animated.Value(0),
      bounce: new Animated.Value(0),
      cubic: new Animated.Value(0),
      back: new Animated.Value(0),
      easeInOutSin: new Animated.Value(0),
      elastic: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    const {
      linearEasing,
      circleEasing,
      ease,
      bounce,
      cubic,
      back,
      easeInOutSin,
      elastic,
    } = this.state;

    Animated.parallel([
      this.getAnimation(linearEasing, Easing.linear),
      this.getAnimation(circleEasing, Easing.circle),
      this.getAnimation(ease, Easing.ease),
      this.getAnimation(bounce, Easing.bounce),
      this.getAnimation(cubic, Easing.cubic),
      this.getAnimation(back, Easing.back(2)),
      this.getAnimation(easeInOutSin, Easing.inOut(Easing.quad)),
      this.getAnimation(elastic, Easing.elastic(2)),
    ]).start();
  };

  getAnimation = (animated, easing) => {
    return Animated.timing(animated, {
      toValue: 1,
      duration: 2000,
      easing: easing,
    });
  };

  getAnimatedStyle = animate => {
    const interpolation = animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, width],
    });
    return {
      marginTop: 10,
      marginLeft: 50,
      width: 20,
      height: 20,
      backgroundColor: 'red',
      transform: [{translateX: interpolation}],
    };
  };

  render() {
    const {
      linearEasing,
      circleEasing,
      ease,
      bounce,
      cubic,
      back,
      easeInOutSin,
      elastic,
    } = this.state;

    return (
      <View>
        <Animated.View style={this.getAnimatedStyle(linearEasing)} />
        <Text style={style.textStyle}>Linear</Text>

        <Animated.View style={this.getAnimatedStyle(circleEasing)} />
        <Text style={style.textStyle}>Circle</Text>

        <Animated.View style={this.getAnimatedStyle(ease)} />
        <Text style={style.textStyle}>Ease</Text>

        <Animated.View style={this.getAnimatedStyle(bounce)} />
        <Text style={style.textStyle}>Bounce</Text>

        <Animated.View style={this.getAnimatedStyle(cubic)} />
        <Text style={style.textStyle}>Cubic</Text>

        <Animated.View style={[this.getAnimatedStyle(back)]} />
        <Text style={style.textStyle}>Back</Text>

        <Animated.View style={this.getAnimatedStyle(easeInOutSin)} />
        <Text style={style.textStyle}>Back</Text>

        <Animated.View style={this.getAnimatedStyle(elastic)} />
        <Text style={style.textStyle}>Elastic</Text>

        <TouchableOpacity
          style={style.buttonStyle}
          onPress={this.startAnimation}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    alignSelf: 'center',
  },

  textStyle: {
    marginTop: 10,
    textAlign: 'center',
  },
});
