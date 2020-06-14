import React, {Component} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import {
  PinchGestureHandler,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {R} from '../Resources/R';

export class PinchZoom extends Component {
  constructor(props) {
    super(props);

    this.lastScale = 1;
    this.translationOffset = {x: 0, y: 0};

    this.state = {
      scaleAnimation: new Animated.Value(1),
      baseScale: new Animated.Value(1),
      translationAnimation: new Animated.ValueXY(0),
    };

    this.scale = Animated.multiply(
      this.state.scaleAnimation,
      this.state.baseScale,
    );
  }

  onPanHandlerStateChanged = ({
    nativeEvent: {state, oldState, translationX, translationY},
  }) => {
    if (oldState === State.ACTIVE) {
      this.translationOffset.x += translationX;
      this.translationOffset.y += translationY;

      this.state.translationAnimation.setOffset(this.translationOffset);

      this.state.translationAnimation.setValue({x: 0, y: 0});
    }
  };

  onHandlerStateChanged = ({nativeEvent: {state, oldState, scale}}) => {
    if (oldState === State.ACTIVE) {
      this.lastScale *= scale;
      this.state.baseScale.setValue(this.lastScale);
      this.state.scaleAnimation.setValue(1);
    }
  };

  render() {
    return (
      <View style={Styles.containerStyle}>
        <PanGestureHandler
          onHandlerStateChange={this.onPanHandlerStateChanged}
          onGestureEvent={Animated.event([
            {
              nativeEvent: {
                translationX: this.state.translationAnimation.x,
                translationY: this.state.translationAnimation.y,
              },
            },
          ])}>
          <PinchGestureHandler
            onGestureEvent={Animated.event([
              {nativeEvent: {scale: this.state.scaleAnimation}},
            ])}
            onHandlerStateChange={this.onHandlerStateChanged}>
            <Animated.Image
              source={R.Images.DP}
              style={[
                Styles.boxStyle,
                {
                  transform: [
                    {scale: this.scale},
                    {perspective: 200},
                    ...this.state.translationAnimation.getTranslateTransform(),
                  ],
                },
              ]}
            />
          </PinchGestureHandler>
        </PanGestureHandler>
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
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
});
