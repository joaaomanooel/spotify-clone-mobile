import { colors, layout } from '@/constants';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  height: ${layout.MAX_HEADER_HEIGHT}px;
`;

export const GradientContainer = styled(Animated.View)`
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const ArtistContainer = styled.View`
  ${StyleSheet.absoluteFill}
  justify-content: center;
  align-items: center;
`;

export const ArtistText = styled(Animated.Text)`
  font-size: ${layout.scale() * 48}px;
  color: ${colors.white.lightest()};
  text-align: center;
  font-weight: bold;
`;

export const TracksContainer = styled.View`
  background-color: ${colors.black.darkest()};
  padding-top: ${layout.screenPadding}px;
`;
