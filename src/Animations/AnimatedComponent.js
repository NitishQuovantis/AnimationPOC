import React, {Component} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import Styles from './styles';

const AnimatedText = Animated.createAnimatedComponent(Text);

export class AnimatedComponent extends Component {
  setNativeProps = props => {
    this._ref.setNativeProps(props);
  };

  render() {
    return (
      <View style={Styles.containerStyle}>
        <AnimatedText
          ref={ref => {
            this._ref = ref;
          }}
          style={{color: 'red'}}>
          Nitish
        </AnimatedText>{' '}
      </View>
    );
  }
}
