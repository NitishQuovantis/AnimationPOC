import React, {Component} from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
import Style from './styles';

export class BasicAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(100),
    };
  }

  getAnimatedBoxStyle = () => {
    const {animation} = this.state;
    return {width: animation, height: animation, backgroundColor: 'red'};
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 150,
      duration: 1000,
    }).start();
  };

  render() {
    const animatedBoxStyle = this.getAnimatedBoxStyle();

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={Style.containerStyle}
        onPress={this.startAnimation}>
        <Animated.View style={animatedBoxStyle} />
      </TouchableOpacity>
    );
  }
}
