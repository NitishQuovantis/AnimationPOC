import React, {Component} from 'react';
import {Text, View, Image, Animated, TouchableOpacity} from 'react-native';
import Styles from './Styles';
import ImageProgress from './ImageProgress';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    const {data} = props;

    this.state = {
      animated: new Animated.Value(0),
      imageIndex: 0,
      currentImage: data.images[0],
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        imageIndex: 0,
        currentImage: this.props.data.images[0],
      });
    }
  }

  showNextImage = () => {
    const {imageIndex} = this.state;

    if (imageIndex === this.props.data.images.length - 1) {
      this.vibrateCard();
      return;
    }

    const nextImage = this.props.data.images[imageIndex + 1];
    this.setState({imageIndex: imageIndex + 1, currentImage: nextImage});
  };

  showPreviousImages = () => {
    const {imageIndex} = this.state;

    if (imageIndex === 0) {
      this.vibrateCard();
      return;
    }

    const nextImage = this.props.data.images[imageIndex - 1];
    this.setState({imageIndex: imageIndex - 1, currentImage: nextImage});
  };

  vibrateCard = () => {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 350,
    }).start(() => {
      this.state.animated.setValue(0);
    });
  };

  getAnimatedStyle = () => {
    const rotationInterpolation = this.state.animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '15deg', '0deg'],
    });

    return {
      ...Styles.profileContainerStyle,
      transform: [{rotateY: rotationInterpolation}, {perspective: 200}],
    };
  };

  render() {
    const {data, likeOpacity, nopeOpacity, superLkeOpacity} = this.props;
    const {currentImage, imageIndex} = this.state;

    const topContainerAnimatedStyle = this.getAnimatedStyle();

    return (
      <Animated.View style={topContainerAnimatedStyle}>
        <View style={Styles.imageIndicatorStyle}>
          {data.images.map((_, index) => {
            return (
              <ImageProgress key={index} isSelected={index === imageIndex} />
            );
          })}
        </View>
        <View style={Styles.imageStyle}>
          <Image
            source={currentImage}
            resizeMode="cover"
            style={Styles.imageStyle}
          />
        </View>

        <Animated.View
          style={[
            Styles.actionTextBoxStyle,
            Styles.likeContainerStyle,
            {
              opacity: likeOpacity ?? 0,
            },
          ]}>
          <Text style={[Styles.actionTextStyle, Styles.likeTextStyle]}>
            Like
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            Styles.actionTextBoxStyle,
            Styles.nopeContainerStyle,
            {
              opacity: nopeOpacity ?? 0,
            },
          ]}>
          <Text style={[Styles.actionTextStyle, Styles.nopeTextStyle]}>
            nope
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            Styles.actionTextBoxStyle,
            Styles.superLikeContainerStyle,
            {
              opacity: superLkeOpacity ?? 0,
            },
          ]}>
          <Text style={[Styles.actionTextStyle, Styles.superLikeTextStyle]}>
            Super {'\n'} like
          </Text>
        </Animated.View>

        <View style={[Styles.imageStyle, {flexDirection: 'row'}]}>
          <TouchableOpacity
            style={{flex: 1, height: '100%'}}
            onPress={this.showPreviousImages}
          />
          <TouchableOpacity style={{flex: 1, height: '100%'}} />
          <TouchableOpacity
            style={{flex: 1, height: '100%'}}
            onPress={this.showNextImage}
          />
        </View>
      </Animated.View>
    );
  }
}
