import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Album, MAX_HEADER_HEIGHT } from './Model';
import Track from './Track';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

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
      onScroll={scrollHandler}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}>
      <View style={styles.header}>
        <Animated.View style={[styles.gradient, animatedHeight]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', 'black']}
          />
        </Animated.View>
        <View style={styles.artistContainer}>
          <Animated.Text style={[styles.artist, animatedOpacity]}>{artist}</Animated.Text>
        </View>
      </View>
      <View style={styles.tracks}>
        {tracks.map((track, key) => (
          <Track key={key} index={key + 1} {...{ track, artist }} />
        ))}
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: MAX_HEADER_HEIGHT,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artist: {
    textAlign: 'center',
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: 'black',
  },
});
