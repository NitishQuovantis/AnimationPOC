import React, {Component} from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';

const width = 300;
const height = 300;

const Hours = 12;
const NonMinIndicator = 4 * Hours;
const MinIndicator = Hours;

const Duration = 60 * 60; // 5 min
const AnimationDuration = Duration * 10;

export class ClockAnimation extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    setTimeout(() => {
      this.startAnimation();
    }, 500);
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: Duration,
      duration: AnimationDuration,
      easing: Easing.linear,
    }).start();
  };

  render() {
    return (
      <View style={style.containerStyle}>
        <View style={style.clockContainer}>
          <ClockIndicatorIndicator />
          <ClockHand
            animation={this.state.animation}
            totalRotation={Duration / 60}
          />

          <ClockHand
            clockHandStyle={style.minuteClockHandStyle}
            animation={this.state.animation}
            totalRotation={Duration / (60 * 60)}
          />

          <ClockHand
            clockHandStyle={style.hourClockHandStyle}
            animation={this.state.animation}
            totalRotation={Duration / (60 * 60 * 60)}
            unitRotation={5} // for 1 unit, it is moving 5 times faster than second and min
          />

          <View style={style.clockCenterDotStyle} />
        </View>
      </View>
    );
  }
}

function ClockIndicatorIndicator() {
  const allIndicator = [...nonMinIndicator(), ...minIndicator()];
  return allIndicator;
}

function nonMinIndicator() {
  const array = [];

  for (let i = 0; i < NonMinIndicator; ++i) {
    array.push(
      <View
        key={`index${i}`}
        style={[
          style.non5MinStickContainer,
          {
            transform: [{rotate: `${90 + i * 6}deg`}],
          },
        ]}>
        <View style={style.non5MinStickStyle} />
        <View style={style.non5MinStickStyle} />
      </View>,
    );
  }

  return array;
}

function minIndicator() {
  const array = [];

  for (let i = 0; i < MinIndicator; ++i) {
    array.push(
      <View
        style={[
          style.non5MinStickContainer,
          {
            transform: [{rotate: `${90 + (i + 1) * 30}deg`}],
          },
        ]}
        key={`indexMin${i}`}>
        <View style={style.minStickStyle} />
        <View style={style.minStickStyle} />
      </View>,
    );
  }

  return array;
}

function ClockHand({
  clockHandStyle,
  animation,
  totalRotation,
  unitRotation = 1,
}) {
  const rotationInterpolation = animation.interpolate({
    inputRange: [0, Duration],
    outputRange: ['-90deg', `${360 * totalRotation * unitRotation - 90}deg`],
  });

  return (
    <Animated.View
      style={[
        style.non5MinStickContainer,
        style.clockHandContainerStyle,

        {
          transform: [{rotate: rotationInterpolation}],
        },
      ]}>
      <View style={style.clockHandHiddenEndStyle} />
      <View style={[style.secondClockHandStyle, clockHandStyle]} />
    </Animated.View>
  );
}

const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#30303030',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  clockContainer: {
    width: height,
    height: width,
    borderRadius: height / 2,
    backgroundColor: 'white',
    overflow: 'hidden',
    justifyContent: 'center',
  },

  non5MinStickContainer: {
    width: width,
    height: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  non5MinStickStyle: {
    width: 10,
    height: 1,
    backgroundColor: 'black',
  },

  minStickStyle: {
    width: 20,
    height: 1,
    backgroundColor: 'black',
  },

  clockHandContainerStyle: {
    position: 'absolute',
    justifyContent: 'flex-start',
  },

  secondClockHandStyle: {
    backgroundColor: 'black',
    height: 1,
    width: width / 2 - 30,
  },

  hourClockHandStyle: {
    backgroundColor: 'black',
    height: 4,
    width: width / 4,
  },

  minuteClockHandStyle: {
    backgroundColor: 'black',
    height: 4,
    width: width / 2 - 30,
  },

  clockHandHiddenEndStyle: {
    width: width / 2,
    backgroundColor: 'transparent',
    height: 1,
  },

  clockCenterDotStyle: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
