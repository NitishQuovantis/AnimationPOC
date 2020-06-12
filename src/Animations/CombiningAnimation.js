import React, {Component} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import Styles from './styles';

export class CombiningAnimation extends Component {
  state = {
    firstAnimation: new Animated.Value(0),
    secondAnimation: new Animated.Value(0),
    thirdAnimation: new Animated.Value(0),
  };

  startStaggerAnimation = () => {
    Animated.stagger(100, [
      this.getAnimation(this.state.firstAnimation),
      this.getAnimation(this.state.secondAnimation),
      this.getAnimation(this.state.thirdAnimation),
    ]).start(() => {
      this.state.firstAnimation.setValue(0);
      this.state.secondAnimation.setValue(0);
      this.state.thirdAnimation.setValue(0);
    });
  };

  startParallelAnimation = () => {
    Animated.parallel([
      this.getAnimation(this.state.firstAnimation),
      this.getAnimation(this.state.secondAnimation),
      this.getAnimation(this.state.thirdAnimation),
    ]).start(() => {
      this.state.firstAnimation.setValue(0);
      this.state.secondAnimation.setValue(0);
      this.state.thirdAnimation.setValue(0);
    });
  };

  startSequenceAnimation = () => {
    Animated.sequence([
      this.getAnimation(this.state.firstAnimation),
      this.getAnimation(this.state.secondAnimation),
      this.getAnimation(this.state.thirdAnimation),
    ]).start(() => {
      this.state.firstAnimation.setValue(0);
      this.state.secondAnimation.setValue(0);
      this.state.thirdAnimation.setValue(0);
    });
  };

  startLoopAnimation = () => {
    Animated.loop(
      Animated.stagger(100, [
        this.getAnimation(this.state.firstAnimation),
        this.getAnimation(this.state.secondAnimation),
        this.getAnimation(this.state.thirdAnimation),
      ]),
      {
        iterations: 4,
      },
    ).start(() => {
      this.state.firstAnimation.setValue(0);
      this.state.secondAnimation.setValue(0);
      this.state.thirdAnimation.setValue(0);
    });
  };

  startDelayAnimation = () => {
    Animated.sequence([
      Animated.delay(1000),
      this.getAnimation(this.state.firstAnimation),
      this.getAnimation(this.state.secondAnimation),
      this.getAnimation(this.state.thirdAnimation),
    ]).start(() => {
      this.state.firstAnimation.setValue(0);
      this.state.secondAnimation.setValue(0);
      this.state.thirdAnimation.setValue(0);
    });
  };

  getAnimation = value => {
    return Animated.timing(value, {toValue: 200, duration: 1000});
  };

  getAnimatingStyle = animation => {
    return {
      transform: [
        {
          translateX: animation,
        },
      ],
    };
  };

  render() {
    const {firstAnimation, secondAnimation, thirdAnimation} = this.state;

    const firstBoxAnimatedStyle = this.getAnimatingStyle(firstAnimation);
    const secondBoxAnimationStyle = this.getAnimatingStyle(secondAnimation);
    const thirdBoxAnimationStyle = this.getAnimatingStyle(thirdAnimation);

    return (
      <View>
        <TouchableOpacity style={localStyle.containerStyle}>
          <Animated.View
            style={[
              Styles.boxStyle,
              localStyle.boxStyle,
              firstBoxAnimatedStyle,
            ]}
          />
          <Animated.View
            style={[
              Styles.boxStyle,
              localStyle.boxStyle,
              secondBoxAnimationStyle,
            ]}
          />
          <Animated.View
            style={[
              Styles.boxStyle,
              localStyle.boxStyle,
              thirdBoxAnimationStyle,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyle.buttonStyle}
          onPress={this.startParallelAnimation}>
          <Text>Start Parallel Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyle.buttonStyle}
          onPress={this.startSequenceAnimation}>
          <Text>Start Sequence Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyle.buttonStyle}
          onPress={this.startStaggerAnimation}>
          <Text>Start Stagger Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyle.buttonStyle}
          onPress={this.startLoopAnimation}>
          <Text>Start loop Animation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyle.buttonStyle}
          onPress={this.startDelayAnimation}>
          <Text>Start delay Animation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  boxStyle: {
    width: 40,
    height: 5,
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 50,
  },
  containerStyle: {
    width: '100%',
    marginTop: 50,
  },

  buttonStyle: {
    width: '100%',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
});
