import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import Styles from './styles';

export class PercentageDimensionAnimation extends Component {
  state = {
    animate: new Animated.Value(0),
  };

  animate = () => {
    Animated.timing(this.state.animate, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      this.state.animate.setValue(0);
    });
  };

  render() {
    const dimensionInterpolator = this.state.animate.interpolate({
      inputRange: [0, 1],
      outputRange: ['10%', '50%'],
    });

    return (
      <View style={Styles.containerStyle}>
        <TouchableOpacity
          onPress={this.animate}
          style={[Styles.containerStyle, {width: '100%'}]}>
          <Animated.View
            style={[
              Styles.boxStyle,
              {
                width: dimensionInterpolator,
                height: dimensionInterpolator,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
