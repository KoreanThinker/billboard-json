[![Cron Crawling](https://github.com/koreanthinker/billboard-json/actions/workflows/cron-crawling.yml/badge.svg)](https://github.com/koreanthinker/billboard-json/actions/workflows/cron-crawling.yml)
[![Example](https://img.shields.io/badge/example-here!-blue)](https://github.com/krtk-dev/billboard-player)
![Stars](https://img.shields.io/github/stars/krtk-dev/billboard-player?style=social)

# Billboard json
> Get json type billboard hot 100 chart, Data update every day !!

# Url
- Hot 100 : https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/hot100/recent.json
- Billboard 200 : *TODO*
- Billboard global 200 : *TODO*
- Artist 100 : *TODO*
- Social 50 : *TODO*

# Usage
### Curl
```bash
$ curl https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/hot100/recent.json
```
### fetch
```js
fetch('https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/hot100/recent.json')
  .then(res => res.json())
  .then(data => console.log(data))
```

# Type
```json
{
  "date": "YYYY-DD-MM",
  "data": [
    {
      "name": string,
      "artist": string,
      "image": string,
      "rank": number,
      "last_week_rank": number | null,
      "peak_rank": number,
      "weeks_on_chart": number
    },
    ...
  ]
}
```
