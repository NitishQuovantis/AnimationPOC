import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Tab, {LOGO_SIZE} from './Tab';
import Styles from './Styles';
import {R} from '../Resources/R';

const {SMALL, LARGE} = LOGO_SIZE;

export default function BottomBar({
  onUndoClick,
  onNopeClick,
  onLikeClick,
  onSuperLikeClick,
  onBoostClick,
}) {
  return (
    <View style={Styles.tabContainerStyle}>
      <Tab icon={R.Images.Undo} logoSize={SMALL} onPress={onUndoClick} />
      <Tab icon={R.Images.Nope} logoSize={LARGE} onPress={onNopeClick} />

      <Tab
        icon={R.Images.SuperLike}
        logoSize={SMALL}
        onPress={onSuperLikeClick}
      />
      <Tab icon={R.Images.Like} logoSize={LARGE} onPress={onLikeClick} />
      <Tab icon={R.Images.Boost} logoSize={SMALL} onPress={onBoostClick} />
    </View>
  );
}
