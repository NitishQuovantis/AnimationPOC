import React, {Component} from 'react';
import {
  TextInput,
  View,
  Animated,
  StyleSheet,
  Button,
  Easing,
} from 'react-native';

export class NumberAnimation2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: new Animated.Value(0),
    };

    this.numberInterpolation = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });

    this.value = 0;
    this.addAnimationListener();
  }

  startAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(() => {
      setTimeout(() => {
        this.state.animated.setValue(0);
      }, 2000);
    });
  };

  addAnimationListener = () => {
    this.state.animated.addListener(() => {
      this.value = this.numberInterpolation.__getValue();

      if (this.inputRef) {
        this.inputRef.setNativeProps({text: `${parseInt(this.value, 10)}`});
      }
    });
  };

  render() {
    return (
      <View style={Styles.containerStyle}>
        <TextInput
          ref={ref => (this.inputRef = ref)}
          value={`${this.value}`}
          style={Styles.textInputStyle}
        />

        <Button title={'Start Animation'} onPress={this.startAnimation} />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  textInputStyle: {
    color: 'black',
    fontSize: 25,
  },
});
