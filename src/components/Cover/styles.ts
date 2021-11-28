import { colors, layout } from '@/constants';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  ${StyleSheet.absoluteFill}
  height: ${layout.MAX_HEADER_HEIGHT}px;
  background-color: ${colors.black.darkest()};
`;

export const Blur = styled(Animated.View)`
  background-color: ${colors.black.darkest()};
  ${StyleSheet.absoluteFill}
`;
