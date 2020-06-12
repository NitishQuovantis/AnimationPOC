import React, {Component} from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';
import Styles from './styles';

export class SpringAnimation extends Component {
  state = {
    animate: new Animated.Value(1),
  };

  animate = () => {
    Animated.spring(this.state.animate, {
      toValue: 2,
      friction: 1,
      tension: 100,
    }).start(() => {
      this.state.animate.setValue(1);
    });
  };

  render() {
    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity onPress={this.animate}>
          <Animated.View
            style={[
              Styles.boxStyle,
              {transform: [{scale: this.state.animate}]},
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
