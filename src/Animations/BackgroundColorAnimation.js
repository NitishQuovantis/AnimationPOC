import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import Styles from './styles';

export class BackgroundColorAnimation extends Component {
  state = {
    animate: new Animated.Value(0),
  };

  animate = () => {
    Animated.timing(this.state.animate, {
      toValue: 1,
      duration: 10000,
    }).start(() => {
      this.state.animate.setValue(0);
    });
  };

  render() {
    const animatedStyleInterpolation = this.state.animate.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'],
    });

    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity onPress={this.animate}>
          <Animated.View
            style={[
              Styles.boxStyle,
              {backgroundColor: animatedStyleInterpolation},
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
