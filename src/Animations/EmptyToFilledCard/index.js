import React, {Component} from 'react';
import {Text, View} from 'react-native';
import EmptyCard from './EmptyCard';
import FilledCard from './FilledCard';

export class EmptyToFilledCard extends Component {
  render() {
    return (
      <View>
        <EmptyCard />
        <FilledCard />
      </View>
    );
  }
}
