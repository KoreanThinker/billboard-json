import fs from 'fs';
import dayjs from 'dayjs';
import path from 'path';

// -------------------- Types -------------------- //
export interface SaveData {
  date: string;
  data: (TrackData | ArtistData)[];
}
export interface TrackData {
  name: string;
  artist: string;
  rank: number;
  weeks_on_chart: number;
  last_week_rank: number | null;
  peak_rank: number;
  image: string;
}
export interface ArtistData {
  name: string;
  rank: number;
  weeks_on_chart: number;
  last_week_rank: number | null;
  peak_rank: number;
  image: string;
}
export type Data = ArtistData | TrackData;
// -------------------- Utils -------------------- //
export const removeLineFeed = (str: string) =>
  str.replace(/\n/g, '').replace(/\t/g, '');

// -------------------- Functions -------------------- //

export const save = (newData: Data[], _path: string) => {
  // get youtube id & image from cache
  const prevData: SaveData = JSON.parse(
    fs.readFileSync(path.join(__dirname, _path, 'recent.json'), 'utf-8'),
  );

  // check changed
  const newDataHash = newData.reduce((prev, {name}) => prev + name, '');
  const prevDataHash = prevData.data.reduce((prev, {name}) => prev + name, '');

  if (newDataHash === prevDataHash) return console.log('Same as prev data');
  console.log('Add new Data ✅');
  // Save old data
  fs.writeFileSync(
    path.join(__dirname, _path, prevData.date + '.json'),
    JSON.stringify(prevData),
    'utf-8',
  );
  // Save new Data
  const date = dayjs().format('YYYY-MM-DD');
  fs.writeFileSync(
    path.join(__dirname, _path, 'recent.json'),
    JSON.stringify({date, data: newData}),
    'utf-8',
  );
};
