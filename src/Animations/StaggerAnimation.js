import React, {Component} from 'react';
import {Animated, TouchableOpacity, View, StyleSheet} from 'react-native';
import Styles from './styles';

export class StaggerAnimation extends Component {
  state = {
    firstAnimation: new Animated.Value(0),
    secondAnimation: new Animated.Value(0),
    thirdAnimation: new Animated.Value(0),
  };

  animate = () => {
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

  getAnimation = value => {
    return Animated.timing(value, {toValue: 200, duration: 1000});
  };

  render() {
    const firstBoxAnimatedStyle = {
      transform: [
        {
          translateX: this.state.firstAnimation,
        },
      ],
    };

    const secondBoxAnimationStyle = {
      transform: [
        {
          translateX: this.state.secondAnimation,
        },
      ],
    };

    const thirdBoxAnimationStyle = {
      transform: [
        {
          translateX: this.state.thirdAnimation,
        },
      ],
    };

    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity
          onPress={this.animate}
          style={localStyle.containerStyle}>
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
  },
});
