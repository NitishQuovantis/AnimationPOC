import React, {Component} from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import Style from './styles';

export class ScaleAnimation extends Component {
  state = {value: new Animated.Value(1)};

  startAnimation = () => {
    Animated.timing(this.state.value, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      this.state.value.setValue(1);
    });
  };

  render() {
    return (
      <View style={Style.containerStyle}>
        <TouchableOpacity onPress={this.startAnimation}>
          <Animated.View
            style={[
              Style.boxStyle,
              {
                transform: [
                  {scaleX: this.state.value},
                  {scaleY: this.state.value},
                ],
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
