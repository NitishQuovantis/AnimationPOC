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
          title={'Core Example'}
          onPress={() => {
            this.props.navigation.navigate('CoreExamples');
          }}
        />

        <Button
          title={'Gesture Animations'}
          onPress={() => {
            this.props.navigation.navigate('GestureAnimations');
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
