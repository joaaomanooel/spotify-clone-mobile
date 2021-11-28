import * as React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { Track } from '@/interfaces';
import { Artist, Cell, Index, Name, Row } from './styles';
import { colors, layout } from '@/constants';

interface TrackProps {
  track: Track;
  artist: string;
  index: number;
}

export default ({ track, artist, index }: TrackProps) => (
  <Row>
    <Cell>
      <Index>{index}</Index>
    </Cell>
    <Cell style={{ flex: 1 }}>
      <Name>{track.name}</Name>
      <Artist>{track.artist || artist}</Artist>
    </Cell>
    <Cell>
      <Icon name="more-horizontal" color={colors.gray.base} size={layout.scale() * 24} />
    </Cell>
  </Row>
);
