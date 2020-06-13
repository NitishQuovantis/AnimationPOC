import React, {Component} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';

export class SimpleGestureAnimation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: new Animated.ValueXY({x: 0, y: 0}),
      animated2: new Animated.ValueXY({x: 0, y: 0}),
    };

    this.initPanHandler();
    this._value = {x: 0, y: 0};

    this.state.animated.addListener(value => (this._value = value));
    Animated.spring(this.state.animated2, {
      toValue: this.state.animated,
    }).start();
  }

  initPanHandler = () => {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        this.state.animated.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.animated.x, dy: this.state.animated.y},
      ]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.animateBallToInitialPosition();
      },
    });
  };

  animateBallToInitialPosition = () => {
    Animated.spring(this.state.animated, {
      toValue: {x: 0, y: 0},
      damping: 20,
    }).start();
  };

  render() {
    return (
      <View style={Styles.containerStyle}>
        <View>
          <View style={{transform: [{translateX: -5}, {translateY: -5}]}}>
            <Animated.View
              style={[
                Styles.ballStyle,
                {
                  transform: this.state.animated2.getTranslateTransform(),
                  backgroundColor: 'red',
                },
              ]}
            />
          </View>

          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              Styles.ballStyle,
              {
                transform: this.state.animated.getTranslateTransform(),
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  ballStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    position: 'absolute',
  },
});
