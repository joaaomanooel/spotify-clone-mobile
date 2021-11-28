import { version } from './package.json';

export default {
  name: 'Spotify',
  displayName: 'Spotify',
  orientation: 'portrait',
  expo: {
    scheme: 'Spotify',
    name: 'Spotify',
    slug: 'Spotify',
    version,
    assetBundlePatterns: ['**/*'],
    orientation: 'portrait',
  },
};
