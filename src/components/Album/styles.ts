import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { BUTTON_HEIGHT } from '../ShufflePlay/styles';

export const Container = styled.View`
  background-color: ${colors.black.darkest()};
  flex: 1;
`;

export const ButtonContainer = styled(Animated.View)`
  top: ${layout.MAX_HEADER_HEIGHT - BUTTON_HEIGHT / 2}px;
  position: absolute;
  right: 0;
  left: 0;
`;
