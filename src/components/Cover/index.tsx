import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { Album } from '@/interfaces';

import { layout } from '@/constants';
import { Blur, Container } from './styles';
const { HEADER_DELTA, MAX_HEADER_HEIGHT } = layout;

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
    <Container style={animatedScale}>
      <Image
        style={{ ...StyleSheet.absoluteFillObject, width: undefined, height: undefined }}
        source={cover}
      />
      <Blur style={animatedOpacity} />
    </Container>
  );
};
