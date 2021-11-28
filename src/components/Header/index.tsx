import * as React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { layout } from '@/constants';
import { Container, Title } from './styles';
const { HEADER_DELTA } = layout;

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
    <Container style={containerOpacity}>
      <Title style={textOpacity}>{artist}</Title>
    </Container>
  );
};
