import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { MIN_HEADER_HEIGHT, HEADER_DELTA } from './Model';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface HeaderProps {
  artist: string;
  y: Animated.SharedValue<number>;
}

export default ({ artist, y }: HeaderProps) => {
  const containerOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [HEADER_DELTA - 16, HEADER_DELTA], [0, 1], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    return { opacity: withTiming(opacity, { duration: 300 }) };
  }, [y]);

  const textOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [HEADER_DELTA - 8, HEADER_DELTA - 4], [0, 1], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    return { opacity: withTiming(opacity, { duration: 300 }) };
  }, [y]);

  return (
    <Animated.View style={[styles.container, containerOpacity]}>
      <Animated.Text style={[styles.title, textOpacity]}>{artist}</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: MIN_HEADER_HEIGHT,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
});
