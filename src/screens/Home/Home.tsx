import React from 'react';

import Album from '@/components/Album';
import { Album as AlbumModel } from '@/interfaces';
import { images } from '@/constants';

const album: AlbumModel = {
  name: 'Remote Control',
  artist: 'Jan Blomqvist',
  release: 2016,
  cover: images.artist,
  tracks: [
    { name: 'Stories Over' },
    { name: 'More', artist: 'Jan Blomqvist, Elena Pitoulis' },
    { name: 'Empty Floor' },
    { name: 'Her Great Escape' },
    { name: 'Dark Noise' },
    { name: 'Drift', artist: 'Jan Blomqvist, Aparde' },
    { name: 'Same Mistake' },
    { name: 'Dancing People Are Never Wrong', artist: 'Jan Blomqvist, The Bianca Story' },
    { name: 'Back in the Taxi' },
    { name: 'Ghosttrack' },
    { name: 'Just OK' },
    { name: 'The End' },
  ],
};

export default () => {
  return <Album {...{ album }} />;
};
