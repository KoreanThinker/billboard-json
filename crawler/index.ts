import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';
import dayjs from 'dayjs';
import path from 'path';

// -------------------- Types -------------------- //
interface SaveData {
  date: string;
  data: Data[];
}
interface Data {
  name: string;
  artist: string;
  rank: number;
  weeks_on_chart: number;
  last_week_rank: number | null;
  peak_rank: number;
  image: string;
}
// -------------------- Utils -------------------- //
export const removeLineFeed = (str: string) =>
  str.replace(/\n/g, '').replace(/\t/g, '');

// -------------------- Functions -------------------- //

export const hot100Crawling = async (): Promise<Data[]> => {
  const res = await axios('https://www.billboard.com/charts/hot-100');

  const $ = cheerio.load(res.data);

  const data: Data[] = [];
  $('.o-chart-results-list-row-container').each((idx, elem) => {
    const lastWeekRank = removeLineFeed(
      $('.o-chart-results-list__item:nth-child(4) > span', elem).first().text(),
    );

    data.push({
      name: removeLineFeed($(elem).find('h3#title-of-a-story').first().text()),
      artist: removeLineFeed($(elem).find('h3 + span.c-label').text()),
      image: $('img', elem).first().attr('data-lazy-src') || '',
      rank: idx + 1,
      last_week_rank: lastWeekRank === '-' ? null : Number(lastWeekRank),
      peak_rank: Number(
        removeLineFeed(
          $(elem)
            .find('.o-chart-results-list__item:nth-child(5) > span')
            .first()
            .text(),
        ),
      ),
      weeks_on_chart: Number(
        removeLineFeed(
          $(elem)
            .find('.o-chart-results-list__item:nth-child(6) > span')
            .first()
            .text(),
        ),
      ),
    });
  });
  return data;
};

// -------------------- Main -------------------- //

(async () => {
  // data crawling from billboard
  const newData = await hot100Crawling();
  // get youtube id & image from cache
  const prevData: SaveData = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '../billboard-hot-100', 'recent.json'),
      'utf-8',
    ),
  );

  // check changed
  const newDataHash = newData.reduce(
    (prev, {artist, name}) => prev + artist + name,
    '',
  );
  const prevDataHash = prevData.data.reduce(
    (prev, {artist, name}) => prev + artist + name,
    '',
  );

  if (newDataHash === prevDataHash) return console.log('Same as prev data');
  console.log('Add new Data ✅');
  // Save old data
  fs.writeFileSync(
    path.join(__dirname, '../billboard-hot-100', prevData.date + '.json'),
    JSON.stringify(prevData),
    'utf-8',
  );
  // Save new Data
  const date = dayjs().format('YYYY-MM-DD');
  fs.writeFileSync(
    path.join(__dirname, '../billboard-hot-100', 'recent.json'),
    JSON.stringify({date, data: newData}),
    'utf-8',
  );
})();
