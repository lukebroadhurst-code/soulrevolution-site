import type { ImageMetadata } from 'astro';

import fireCircle from '../assets/photos/fire-circle.jpg';
import crowdCircle from '../assets/photos/crowd-circle.jpg';
import nightFireSong from '../assets/photos/night-fire-song.jpg';
import tentDance from '../assets/photos/tent-dance.png';
import poshBells from '../assets/photos/posh-bells.webp';
import lineupPoster2026 from '../assets/photos/lineup-poster-2026.jpg';

const g = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.webp', { eager: true });
export const gallery: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(g).map(([path, mod]) => [path.split('/').pop()!.replace('.webp', ''), mod.default]),
);
const pick = (id: string) => gallery[id];

export const photos = {
  fireCircle, crowdCircle, nightFireSong, tentDance, poshBells, lineupPoster2026,
  // named picks from the gallery
  sunset: pick('7-4'),
  bonfire: pick('4-3'),
  firewalk: pick('18'),
  fireRing: pick('5-3'),
  drummer: pick('26'),
  guitarist: pick('15'),
  ignite: pick('7'),
  talks: pick('6-1'),
  altar: pick('1-2'),
  healing: pick('32'),
  family: pick('10'),
  kids: pick('7-1'),
  horse: pick('4-1'),
  comeAsYouAre: pick('7-3'),
  workshop: pick('12'),
  meditation: pick('8-3'),
  music: pick('2-2'),
  ceremony: pick('3-1'),
  dancers: pick('25'),
  tabla: pick('6-4'),
  hug: pick('5-1'),
  tents: pick('28'),
  portraitA: pick('2-1'),
  portraitB: pick('10-1'),
  elder: pick('3-2'),
};
