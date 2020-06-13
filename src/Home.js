import React, {Component} from 'react';
import {ScrollView, Button, Text} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView style={{flex: 1, margin: 20}}>
        <Button
          title="Basic Animation"
          onPress={() => {
            this.props.navigation.navigate('BasicAnimation');
          }}
        />

        <Button
          title="Opacity Animation"
          onPress={() => {
            this.props.navigation.navigate('OpacityAnimation');
          }}
        />
        <Button
          title="Translate Animation"
          onPress={() => {
            this.props.navigation.navigate('TranslateAnimation');
          }}
        />
        <Button
          title="Scale Animation"
          onPress={() => {
            this.props.navigation.navigate('ScaleAnimation');
          }}
        />

        <Button
          title="Combining Animation"
          onPress={() => {
            this.props.navigation.navigate('CombiningAnimation');
          }}
        />

        <Button
          title="Easing"
          onPress={() => {
            this.props.navigation.navigate('EasingDemo');
          }}
        />

        <Button
          title="BackgroundColorAnimation"
          onPress={() => {
            this.props.navigation.navigate('BackgroundColorAnimation');
          }}
        />

        <Button
          title="Rotation Animation"
          onPress={() => {
            this.props.navigation.navigate('RotationAnimation');
          }}
        />

        <Button
          title="PercentageDimensionAnimation"
          onPress={() => {
            this.props.navigation.navigate('PercentageDimensionAnimation');
          }}
        />

        <Button
          title="Spring Animation"
          onPress={() => {
            this.props.navigation.navigate('SpringAnimation');
          }}
        />
        <Button
          title="Decay Animation"
          onPress={() => {
            this.props.navigation.navigate('DecayAnimation');
          }}
        />

        <Button
          title="ParallelAnimation"
          onPress={() => {
            this.props.navigation.navigate('ParallelAnimation');
          }}
        />

        <Button
          title="SequenceAnimation"
          onPress={() => {
            this.props.navigation.navigate('SequenceAnimation');
          }}
        />

        <Button
          title="StaggerAnimation"
          onPress={() => {
            this.props.navigation.navigate('StaggerAnimation');
          }}
        />

        <Text>Examples</Text>

        <Button
          title="Number Animation 1"
          onPress={() => {
            this.props.navigation.navigate('NumberAnimation1');
          }}
        />

        <Button
          title="Number Animation 2"
          onPress={() => {
            this.props.navigation.navigate('NumberAnimation2');
          }}
        />

        <Button
          title="Center Text To Left Align Text"
          onPress={() => {
            this.props.navigation.navigate('CenterTextToLeftAlignText');
          }}
        />

        <Button
          title="HamburgerToTick"
          onPress={() => {
            this.props.navigation.navigate('HamburgerToTick');
          }}
        />

        <Button
          title="HamburgerToCross"
          onPress={() => {
            this.props.navigation.navigate('HamburgerToCross');
          }}
        />

        <Button
          title="HamburgerToBack"
          onPress={() => {
            this.props.navigation.navigate('HamburgerToBack');
          }}
        />

        <Button
          title="SlideAndRemove"
          onPress={() => {
            this.props.navigation.navigate('SlideAndRemove');
          }}
        />

        <Button
          title="ClockAnimation"
          onPress={() => {
            this.props.navigation.navigate('ClockAnimation');
          }}
        />

        <Button
          title="SwitchAnimation"
          onPress={() => {
            this.props.navigation.navigate('SwitchAnimation');
          }}
        />

        <Button
          title="Empty To Filled Card"
          onPress={() => {
            this.props.navigation.navigate('EmptyToFilledCard');
          }}
        />

        <Button
          title="Simple Gesture Event"
          onPress={() => {
            this.props.navigation.navigate('SimpleGestureAnimation');
          }}
        />
      </ScrollView>
    );
  }
}
