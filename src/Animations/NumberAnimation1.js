import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated, Button} from 'react-native';

const DigitArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const LineHeight = 20;

export class NumberAnimation1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: new Animated.Value(0),
      numberArray: this.getNumberArray(193235769373),
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      setTimeout(() => {
        this.state.animation.setValue(0);
      }, 2000);
    });
  };

  getNumberArray = number => {
    if (number === 0) {
      return [0];
    }

    let n = number;
    const array = [];

    while (n > 0) {
      array.push(n % 10);
      n = parseInt(n / 10, 10);
    }

    return array.reverse();
  };

  render() {
    const {numberArray, animation} = this.state;

    return (
      <View style={Styles.containerStyle}>
        <View style={Styles.numberContainerStyle}>
          {numberArray.map((value, index) => {
            return (
              <AnimatingNumber
                key={`${value}${index}`}
                number={value}
                animation={animation}
              />
            );
          })}
        </View>

        <Button title={'Start Animation'} onPress={this.startAnimation} />
      </View>
    );
  }
}

function getNumberTranslation(number, animation) {
  let finalTranslation = 0;

  if (number === 0) {
    finalTranslation = LineHeight * 10;
  } else {
    finalTranslation = LineHeight * number;
  }

  const translationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -finalTranslation],
  });

  return {
    transform: [{translateY: translationInterpolation}],
  };
}

function AnimatingNumber({number, animation}) {
  const translation = getNumberTranslation(number, animation);

  return (
    <View style={Styles.textContainerStyle}>
      <Animated.View style={[translation]}>
        {DigitArray.map((value, index) => {
          return (
            <Text key={index} style={Styles.textStyle}>
              {value}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
}

const Styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  numberContainerStyle: {
    flexDirection: 'row',
  },

  textContainerStyle: {
    height: LineHeight,
    overflow: 'hidden',
  },

  textStyle: {
    fontSize: 20,
    lineHeight: LineHeight,
    paddingHorizontal: 1,
  },
});
