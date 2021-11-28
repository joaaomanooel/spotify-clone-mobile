import { colors, layout } from '@/constants';
import styled from 'styled-components/native';

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

export const Button = styled.View`
  background-color: #1ed760;
  justify-content: center;
  height: ${BUTTON_HEIGHT};
  width: ${BUTTON_WIDTH};
  align-self: center;
  border-radius: 32;
`;

export const Label = styled.Text`
  font-size: ${layout.scale() * 14}px;
  color: ${colors.white.lightest()};
  text-align: center;
  font-weight: 600;
`;
