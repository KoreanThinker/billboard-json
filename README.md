[![Cron Crawling](https://github.com/koreanthinker/billboard-json/actions/workflows/cron-crawling.yml/badge.svg)](https://github.com/koreanthinker/billboard-json/actions/workflows/cron-crawling.yml)
[![Example](https://img.shields.io/badge/example-here!-blue)](https://github.com/krtk-dev/billboard-player)
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fkoreanthinker%2Fbillboard-json&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)
![Stars](https://img.shields.io/github/stars/krtk-dev/billboard-player?style=social)

# Billboard json
> Get json type billboard hot 100 chart

# Url
- Hot 100 : https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/hot100/recent.json
- Billboard 200 : *TODO*
- Billboard global 200 : *TODO*
- Artist 100 : *TODO*
- Social 50 : *TODO*

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