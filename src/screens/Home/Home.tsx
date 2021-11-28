import React from 'react';

import Album from '@/components/Album';
import { Album as AlbumModel } from '@/interfaces';
import { images } from '@/constants';

const album: AlbumModel = {
  name: 'AmarElo - Ao Vivo',
  artist: 'Emicida',
  release: 2016,
  cover: images.artist,
  tracks: [
    { name: 'A Ordem natural das coisas / Chiclete com banana', artist: 'Emicida, Mc Tha' },
    { name: 'Quem Tem Um Amigo (Tem Tudo) / A Amizade - Ao Vivo' },
    { name: 'Pequenas Alegrias da Vida Adulta - Ao Vivo' },
    { name: 'Cananéia, Iguape e Ilha Comprida - Ao Vivo' },
    { name: 'Baiana - Ao Vivo' },
    { name: 'Madagascar - Ao Vivo' },
    { name: 'Alma Gêmea - Ao Vivo' },
    { name: '9nha / Eu Gosto Dela - Ao Vivo', artist: 'Emicida, Drik Barbosa' },
    { name: 'Paisagem - Ao Vivo' },
    { name: 'Hoje Cedo - Ao Vivo' },
    {
      name: 'AmarElo (Sample: Sujeito de Sorte - Belchior) - Ao Vivo',
      artist: 'Emicida, Majur, Pabllo Vittar',
    },
    { name: 'Eminência Parda - Ao Vivo', artist: 'Emicida, Jé Santiago' },
    { name: 'Pantera Negra - Ao Vivo' },
    { name: 'Boa Esperança - Ao Vivo' },
    { name: 'Ismália - Ao Vivo', artist: 'Emicida, Fernanda Montenegro' },
    { name: 'Levanta e Anda - Ao Vivo', artist: 'Emicida, Rael' },
    { name: 'Gueto - Ao Vivo' },
    { name: 'A Chapa é Quente - Ao Vivo' },
    { name: 'Libre - Ao Vivo' },
    { name: 'Principia - Ao Vivo', artist: 'Emicida, Pastor Henrique Vieira' },
  ],
};

export default () => <Album {...{ album }} />;
