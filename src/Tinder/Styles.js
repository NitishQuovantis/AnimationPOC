import {StyleSheet} from 'react-native';
import styleSheet from '../Animations/styles';

const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#efefef',
  },

  imageContainerStyle: {
    flex: 1,
    zIndex: 10,
  },

  profilesTopContainerStyle: {
    ...StyleSheet.absoluteFill,
    margin: 10,
    marginHorizontal: 0,
  },

  bottomContainerStyle: {
    height: 100,
  },

  profileContainerStyle: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },

  imageStyle: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },

  actionTextBoxStyle: {
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'blue',
    borderStyle: 'solid',
  },

  actionTextStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  likeTextStyle: {
    color: 'green',
  },

  nopeTextStyle: {
    color: 'red',
  },

  superLikeTextStyle: {
    textAlign: 'center',
    color: 'green',
  },

  likeContainerStyle: {
    position: 'absolute',
    left: 30,
    top: 40,
    transform: [{rotate: '-15deg'}],
  },

  nopeContainerStyle: {
    position: 'absolute',
    right: 30,
    top: 40,
    transform: [{rotate: '15deg'}],
  },

  superLikeContainerStyle: {
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '15deg'}],
  },

  tabContainerStyle: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  commonTabContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#afafaf',
    shadowOffset: {height: 5, width: 0},
    shadowOpacity: 0.16,
    shadowRadius: 5,
  },

  smallTabImageContainerStyle: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  largeTabIconImageContainerStyle: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },

  tabIconContainer: {
    margin: 10,
    width: '50%',
    height: '50%',
    overflow: 'hidden',
  },

  tabIconStyle: {
    width: '100%',
    height: '100%',
  },

  imageIndicatorStyle: {
    zIndex: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    height: 5,
  },
});

export default Styles;
