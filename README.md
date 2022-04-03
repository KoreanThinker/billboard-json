[![Billboard Hot 100](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-hot-100.yml/badge.svg)](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-hot-100.yml)
[![Billboard 200](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-200.yml/badge.svg)](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-200.yml)
[![Billboard Global 200](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-global-200.yml/badge.svg)](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-global-200.yml)
[![Billboard Artist 100](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-artist-100.yml/badge.svg)](https://github.com/koreanthinker/billboard-json/actions/workflows/billboard-artist-100.yml)
![Stars](https://img.shields.io/github/stars/krtk-dev/billboard-player?style=social)

# Billboard json
> Get json type billboard hot 100 chart, Data update every day !!

---

# Url
- [Billboard Hot 100](https://www.billboard.com/charts/hot-100/) 
```url
https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json
```
- [Billboard 200](https://www.billboard.com/charts/the-billboard-200/)
```url
https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json
```
- [Billboard Global 200](https://www.billboard.com/charts/billboard-global-200/)
```url
https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-global-200/recent.json
```
- [Billboard Artist 100](https://www.billboard.com/charts/artist-100/)
```url
https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json
```

---

# Usage
### Curl
```bash
$ curl https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json
```
### fetch
```js
fetch('https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json')
  .then(res => res.json())
  .then(data => console.log(data))
```

---

# Type
### `Billboard Hot 100`, `Billboard 200`, `Billboard Global 200`
```json
{
  "date": "YYYY-DD-MM",
  "data": [
    {
      "name": "string",
      "artist": "string",
      "image": "string",
      "rank": "number",
      "last_week_rank": "number | null",
      "peak_rank": "number",
      "weeks_on_chart": "number"
    },
    "..."
  ]
}
```
### `Artist 100`
```json
{
  "date": "YYYY-DD-MM",
  "data": [
    {
      "name": "string",
      "image": "string",
      "rank": "number",
      "last_week_rank": "number | null",
      "peak_rank": "number",
      "weeks_on_chart": "number"
    },
    "..."
  ]
}
```