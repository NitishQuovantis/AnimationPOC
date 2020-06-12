import React, {Component} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import Style from './styles';

export class DecayAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.ValueXY({x: 100, y: 100}),
    };
  }

  getAnimatedBoxStyle = () => {
    const {animation} = this.state;
    return {width: animation.x, height: animation.y, backgroundColor: 'red'};
  };

  startAnimation = () => {
    Animated.decay(this.state.animation, {
      velocity: {x: 3, y: 2},
      deceleration: 0.99,
    }).start(() => {
      this.state.animation.setValue({x: 100, y: 100});
    });
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
