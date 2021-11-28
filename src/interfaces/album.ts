import { Track } from './track';

export interface Album {
  name: string;
  artist: string;
  release: number;
  cover: number;
  tracks: Track[];
}
