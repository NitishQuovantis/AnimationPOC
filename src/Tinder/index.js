import React, {Component} from 'react';
import {Animated, View, Dimensions} from 'react-native';
import Styles from './Styles';
import Profile from './Profile';
import {ProfileData} from './Data';
import BottomBar from './BottomBar';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export default class Tinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: ProfileData,
      panAnimated: new Animated.ValueXY({x: 0, y: 0}),
    };
  }

  getTopMostCardStyle = () => {
    const {panAnimated} = this.state;

    const rotationInterpolation = panAnimated.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, SCREEN_WIDTH / 2],
      outputRange: ['15deg', '-15deg'],
      extrapolate: 'clamp',
    });

    return {
      ...Styles.profilesTopContainerStyle,
      transform: [
        ...panAnimated.getTranslateTransform(),
        {rotateZ: rotationInterpolation},
        {scale: 1.05},
      ],
    };
  };

  onHandlerStateChange = ({
    nativeEvent: {oldState, translationX, translationY, velocityX, velocityY},
  }) => {
    if (
      Math.abs(translationX) < SCREEN_WIDTH / 4 &&
      Math.abs(translationY) > SCREEN_HEIGHT / 6 &&
      velocityY < -1000
    ) {
      this.superLike({duration: 250});
      return;
    }

    if (oldState === State.ACTIVE) {
      if (velocityX > 500 && translationX > SCREEN_WIDTH / 3) {
        this.swipeRight({duration: 250});
      } else if (velocityX < -500 && translationX < -SCREEN_WIDTH / 3) {
        this.swipeLeft({duration: 250});
      } else {
        this.springBackToInitialPosition();
      }
    }
  };

  springBackToInitialPosition = () => {
    Animated.spring(this.state.panAnimated, {
      toValue: {x: 0, y: 0},
    }).start();
  };

  swipeRight = ({duration = 500}) => {
    Animated.timing(this.state.panAnimated, {
      toValue: {x: SCREEN_WIDTH * 1.3, y: 0},
      duration,
    }).start(this.removeAndAddProfileToBack);
  };

  swipeLeft = ({duration = 500}) => {
    console.log('Duration is', duration);
    Animated.timing(this.state.panAnimated, {
      toValue: {x: -SCREEN_WIDTH * 1.3, y: 0},
      duration,
    }).start(this.removeAndAddProfileToBack);
  };

  superLike = ({duration = 500}) => {
    Animated.timing(this.state.panAnimated, {
      toValue: {y: -SCREEN_HEIGHT * 1.3, x: 0},
      duration,
    }).start(this.removeAndAddProfileToBack);
  };

  removeAndAddProfileToBack = () => {
    let {profiles} = this.state;
    const [first, ...rest] = profiles;

    profiles = [...rest, first];

    this.setState({profiles}, this.resetAnimation);
  };

  secondCardAnimationStyle = () => {
    const scaleXInterpolation = this.state.panAnimated.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1.05, 1, 1.05],
      extrapolate: 'clamp',
    });
    const scaleYInterpolation = this.state.panAnimated.y.interpolate({
      inputRange: [-SCREEN_HEIGHT / 6, 0, SCREEN_HEIGHT / 6],
      outputRange: [1.05, 1, 1.05],
      extrapolate: 'clamp',
    });

    const scaleInterpolation = Animated.multiply(
      scaleXInterpolation,
      scaleYInterpolation,
    );

    const scale = Animated.diffClamp(scaleInterpolation, 1, 1.05);

    return {
      transform: [{scale}],
      opacity: scale,
    };
  };

  resetAnimation = () => {
    this.state.panAnimated.setValue({x: 0, y: 0});
  };

  getActionOpacity = () => {
    const {panAnimated} = this.state;

    const likeOpacity = panAnimated.x.interpolate({
      inputRange: [0, 30, SCREEN_WIDTH / 4],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    const nopeOpacity = panAnimated.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 4, -30, 0],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });

    const superLikeXCondition = panAnimated.x.interpolate({
      inputRange: [-30, 0, 1, 10, 20],
      outputRange: [0, 1, 1, 1, 0],
      extrapolate: 'clamp',
    });

    const superLikeYCondition = panAnimated.y.interpolate({
      inputRange: [-50, -49, 0],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });

    const superLikeOpacity = Animated.multiply(
      superLikeXCondition,
      superLikeYCondition,
    );

    return {likeOpacity, nopeOpacity, superLikeOpacity};
  };

  onUndoPressed = () => {
    let {profiles} = this.state;
    const lastElement = profiles.splice(profiles.length - 1, 1);
    profiles.unshift(lastElement[0]);

    this.setState({profiles}, this.resetAnimation);
  };

  render() {
    const {profiles, panAnimated} = this.state;
    const [first, second] = profiles;

    const topCardStyle = this.getTopMostCardStyle();
    const secondCardStyle = this.secondCardAnimationStyle();

    const {
      likeOpacity,
      nopeOpacity,
      superLikeOpacity,
    } = this.getActionOpacity();

    return (
      <View style={Styles.containerStyle}>
        <View style={Styles.imageContainerStyle}>
          <Animated.View
            style={[Styles.profilesTopContainerStyle, secondCardStyle]}>
            <Profile data={second} />
          </Animated.View>

          <PanGestureHandler
            onHandlerStateChange={this.onHandlerStateChange}
            onGestureEvent={Animated.event([
              {
                nativeEvent: {
                  translationX: panAnimated.x,
                  translationY: panAnimated.y,
                },
              },
            ])}>
            <Animated.View style={topCardStyle}>
              <Profile
                data={first}
                likeOpacity={likeOpacity}
                nopeOpacity={nopeOpacity}
                superLkeOpacity={superLikeOpacity}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>

        <View style={Styles.bottomContainerStyle}>
          <BottomBar
            onUndoClick={this.onUndoPressed}
            onLikeClick={this.swipeRight}
            onNopeClick={this.swipeLeft}
            onSuperLikeClick={this.superLike}
          />
        </View>
      </View>
    );
  }
}
