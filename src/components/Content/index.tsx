import * as React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { Album } from '@/interfaces';
import { layout } from '@/constants';

import Track from '../Track';
import {
  ArtistContainer,
  ArtistText,
  GradientContainer,
  HeaderContainer,
  TracksContainer,
} from './styles';

const { MAX_HEADER_HEIGHT } = layout;

interface ContentProps {
  album: Album;
  y: Animated.SharedValue<number>;
  scrollHandler: any;
}

export default ({ album: { artist, tracks }, y, scrollHandler }: ContentProps) => {
  const animatedHeight = useAnimatedStyle(() => {
    const height = interpolate(y.value, [-MAX_HEADER_HEIGHT, 0], [0, MAX_HEADER_HEIGHT], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    return { height: withTiming(height, { duration: 300 }) };
  }, [y]);

  const animatedOpacity = useAnimatedStyle(() => {
    const halfHeaderHeight = MAX_HEADER_HEIGHT / 4;
    const opacity = interpolate(y.value, [-halfHeaderHeight, 0, halfHeaderHeight], [0, 1, 0], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    });
    return { opacity: withTiming(opacity, { duration: 300 }) };
  }, [y]);

  return (
    <Animated.ScrollView
      style={{ flex: 1 }}
      onScroll={scrollHandler}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}>
      <HeaderContainer>
        <GradientContainer style={animatedHeight}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
          />
        </GradientContainer>
        <ArtistContainer>
          <ArtistText style={animatedOpacity}>{artist}</ArtistText>
        </ArtistContainer>
      </HeaderContainer>
      <TracksContainer>
        {tracks.map((track, key) => (
          <Track key={key} index={key + 1} {...{ track, artist }} />
        ))}
      </TracksContainer>
    </Animated.ScrollView>
  );
};
