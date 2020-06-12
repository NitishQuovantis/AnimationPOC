import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import Style from './styles';

export class TranslateAnimation extends Component {
  state = {animation: new Animated.Value(0)};

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 50,
      duration: 1000,
    }).start(() => {
      this.state.animation.setValue(0);
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
                  {translateX: this.state.animation},
                  {translateY: this.state.animation},
                ],
              },
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
