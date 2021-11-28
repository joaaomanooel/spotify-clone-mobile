import * as React from 'react';
import {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import { Album } from '@/interfaces';
import { layout } from '@/constants';

import Header from '../Header';
import Content from '../Content';
import Cover from '../Cover';
import ShufflePlay from '../ShufflePlay';

import { ButtonContainer, Container } from './styles';

const { HEADER_DELTA } = layout;

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
    <Container>
      <Cover {...{ y, album }} />
      <Content {...{ y, scrollHandler, album }} />
      <Header {...{ y, artist }} />
      <ButtonContainer style={animatedButtonContainer}>
        <ShufflePlay />
      </ButtonContainer>
    </Container>
  );
};
