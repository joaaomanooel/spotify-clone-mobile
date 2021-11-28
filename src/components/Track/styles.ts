import { colors, layout } from '@/constants';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  background-color: ${colors.black.darkest};
`;
export const Cell = styled.View`
  justify-content: center;
  padding: ${layout.scale() * 14}px;
`;
export const Index = styled.Text`
  color: ${colors.gray.base};
`;
export const Artist = styled.Text`
  color: ${colors.gray.base};
`;
export const Name = styled.Text`
  color: ${colors.white.lightest};
`;
