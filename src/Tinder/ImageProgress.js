import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function ImageProgress({isSelected}) {
  const backgroundColor = isSelected ? 'white' : '#afafaf';

  return (
    <View
      style={[
        Styles.containerStyle,
        {
          backgroundColor,
        },
      ]}
    />
  );
}

const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginHorizontal: 2,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
