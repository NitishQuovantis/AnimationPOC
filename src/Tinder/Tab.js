import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Styles from './Styles';

export const LOGO_SIZE = {
  SMALL: 'small',
  LARGE: 'large',
};

export default function Tab({logoSize = LOGO_SIZE.SMALL, icon, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[
        logoSize === LOGO_SIZE.SMALL
          ? Styles.smallTabImageContainerStyle
          : Styles.largeTabIconImageContainerStyle,
        Styles.commonTabContainerStyle,
      ]}>
      <View style={Styles.tabIconContainer}>
        <Image source={icon} style={Styles.tabIconStyle} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
}
