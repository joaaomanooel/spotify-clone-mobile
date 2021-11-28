import { colors, layout } from '@/constants';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  background-color: ${colors.black.darkest()};
  padding-top: ${layout.statusBarHeight}px;
  height: ${layout.MIN_HEADER_HEIGHT}px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
`;

export const Title = styled(Animated.Text)`
  font-size: ${layout.scale() * 16}px;
  text-align: center;
  font-weight: 400;
  color: white;
`;
