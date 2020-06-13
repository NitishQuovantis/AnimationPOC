import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Animated, Easing} from 'react-native';

const BOX_HEIGHT = 200;

export class CenterTextToLeftAlignText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        this.state.animated.setValue(0);
      }, 2000);
    });
  };

  getFlexForLeftBox = () => {
    const flexInterpolation = this.state.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    return {
      flex: flexInterpolation,
    };
  };

  render() {
    const flexForLeftView = this.getFlexForLeftBox();

    return (
      <View style={Styles.containerStyle}>
        <View style={Styles.boxStyle}>
          <Animated.View style={Styles.textContainerStyle}>
            <Animated.View style={[Styles.dummyView, flexForLeftView]} />
            <Text>Nitish</Text>
            <View style={Styles.dummyView} />
          </Animated.View>
        </View>

        <Button title={'Start Animation'} onPress={this.startAnimation} />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxStyle: {
    width: '50%',
    height: BOX_HEIGHT,
    backgroundColor: '#efefef',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dummyView: {
    backgroundColor: 'transparent',
    padding: 5,
    flex: 1,
  },

  textContainerStyle: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
  },
});
