import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Album, HEADER_DELTA, MAX_HEADER_HEIGHT } from './Model';
import Header from './Header';
import Content from './Content';
import Cover from './Cover';
import ShufflePlay, { BUTTON_HEIGHT } from './ShufflePlay';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

interface AlbumProps {
  album: Album;
}

export default ({ album }: AlbumProps) => {
  const { artist } = album;

  const y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      y.value = e.contentOffset.y;
    },
  });

  const translateY = useDerivedValue(() => {
    const value = y.value < HEADER_DELTA ? y.value : HEADER_DELTA;
    return value * -1;
  });
  const animatedButtonContainer = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Cover {...{ y, album }} />
      <Content {...{ y, scrollHandler, album }} />
      <Header {...{ y, artist }} />
      <Animated.View
        style={[
          animatedButtonContainer,
          {
            position: 'absolute',
            top: MAX_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
            left: 0,
            right: 0,
          },
        ]}>
        <ShufflePlay />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
