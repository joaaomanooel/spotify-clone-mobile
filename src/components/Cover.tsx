import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Album, HEADER_DELTA, MAX_HEADER_HEIGHT } from './Model';

interface CoverProps {
  album: Album;
  y: Animated.SharedValue<number>;
}

export default ({ album: { cover }, y }: CoverProps) => {
  const animatedScale = useAnimatedStyle(() => {
    const scale = interpolate(y.value, [-MAX_HEADER_HEIGHT / 5, 0], [3, 1], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    return { transform: [{ scale: withTiming(scale, { duration: 300 }) }] };
  }, [y]);

  const animatedOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [-64, HEADER_DELTA / 2, HEADER_DELTA], [0, 0.2, 1], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    return { opacity: withTiming(opacity, { duration: 600 }) };
  }, [y]);

  return (
    <Animated.View style={[styles.container, animatedScale]}>
      <Image style={styles.image} source={cover} />
      <Animated.View
        style={[{ ...StyleSheet.absoluteFillObject, backgroundColor: 'black' }, animatedOpacity]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
