import {
  OpacityAnimation,
  TranslateAnimation,
  ScaleAnimation,
  BackgroundColorAnimation,
  RotationAnimation,
  PercentageDimensionAnimation,
  SpringAnimation,
  ParallelAnimation,
  SequenceAnimation,
  StaggerAnimation,
  BasicAnimation,
  DecayAnimation,
  CombiningAnimation,
  EasingDemo,
  AnimationInterpolation,
  HamburgerToTick,
  HamburgerToCross,
  HamburgerToBack,
  SlideAndRemove,
  ClockAnimation,
  SwitchAnimation,
  EmptyToFilledCard,
  NumberAnimation1,
  NumberAnimation2,
  CenterTextToLeftAlignText,
  SimpleGestureAnimation,
  PinchZoom,
} from '../Animations';
import Home from '../Home';
import CoreExamples from '../CoreExamples';
import GestureAnimations from '../GestureAnimations';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const appStack = createStackNavigator({
  Home,
  BasicAnimation,
  DecayAnimation,
  OpacityAnimation,
  TranslateAnimation,
  ScaleAnimation,
  BackgroundColorAnimation,
  RotationAnimation,
  PercentageDimensionAnimation,
  SpringAnimation,
  ParallelAnimation,
  SequenceAnimation,
  StaggerAnimation,
  CombiningAnimation,
  EasingDemo,
  AnimationInterpolation,
  HamburgerToTick,
  HamburgerToCross,
  HamburgerToBack,
  SlideAndRemove,
  ClockAnimation,
  SwitchAnimation,
  EmptyToFilledCard,
  NumberAnimation1,
  NumberAnimation2,
  CenterTextToLeftAlignText,
  SimpleGestureAnimation,
  CoreExamples,
  GestureAnimations,
  PinchZoom,
});

const AppContainer = createAppContainer(appStack);

export default AppContainer;
