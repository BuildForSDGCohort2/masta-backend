import got from "got";

export default class NewsService {
  static async getNews() {
    // const body = await got.get(`https://newsapi.org/v2/top-headlines?country=gb&pageSize=6&apiKey=edcac9c2aa1e444fb95914793fab0788&category=health`).json();
    const data = {
      "status": "ok",
      "totalResults": 70,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "Mirror Online"
          },
          "author": "Milo Boyd",
          "title": "Thousands of vulnerable 'to spend winter indoors as Government brings back shielding' - Mirror Online",
          "description": "Under new measures that may be introduced in coronavirus infection hotspots, vulnerable people would be asked to isolate, but not in the blanket way seen earlier this year",
          "url": "https://www.mirror.co.uk/news/uk-news/thousands-vulnerable-to-spend-winter-22816761",
          "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article22674176.ece/ALTERNATES/s1200/0_Care-Worker-Visiting-A-UK-Residents-Home.jpg",
          "publishedAt": "2020-10-08T23:19:00Z",
          "content": "Hundreds of thousands of Brits face spending winter inside as the Government prepares to resume shielding the vulnerable in hotspots, it has been reported.\r\nUnder new measures that could be announced… [+3305 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Wales Online"
          },
          "author": "Mark Smith",
          "title": "Staff at Royal Glamorgan Hospital 'demoralised, stressed and saddened by Covid outbreak' - Wales Online",
          "description": "Medical director Dr Nick Lyons speaks about the worrying spike in cases which has been linked with 24 deaths",
          "url": "https://www.walesonline.co.uk/news/health/staff-royal-glamorgan-hospital-demoralised-19073409",
          "urlToImage": "https://i2-prod.walesonline.co.uk/incoming/article19075156.ece/ALTERNATES/s1200/0_MSR_ECH_290120lyons_01.jpg",
          "publishedAt": "2020-10-08T20:16:00Z",
          "content": "As many as 24 people have now died following an outbreak of coronavirus at the Royal Glamorgan Hospital in Llantrisant.\r\nCwm Taf Morgannwg University Health Board also confirmed on Thursday that 129 … [+6067 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Telegraph.co.uk"
          },
          "author": "By\nTelegraph Reporters",
          "title": "Christmas lockdown if tough restrictions are not introduced now, Sage adviser warns - Telegraph.co.uk",
          "description": "Professor John Edmunds warned hospital cases and deaths will rise without drastic action",
          "url": "https://www.telegraph.co.uk/news/2020/10/08/christmas-lockdown-tough-restrictions-not-introduced-now-sage/",
          "urlToImage": "https://www.telegraph.co.uk/content/dam/news/2020/10/08/TELEMMGLPICT000241428144_trans_NvBQzQNjv4BqcpoWzwBIzlnewd68KzIvqPctAPMNiKvlkcZf6zNr5hc.jpeg?impolicy=logo-overlay",
          "publishedAt": "2020-10-08T19:36:00Z",
          "content": "A new lockdown is needed immediately otherwise the country will still be living under social restrictions over Christmas, a Government scientific adviser has warned.\r\nProfessor John Edmunds, who is a… [+1926 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Covid 19: East and west Suffolk added to watchlist - BBC News",
          "description": "Council leaders have warned of tougher restrictions if cases continue to rise.",
          "url": "https://www.bbc.com/news/uk-england-suffolk-54466653",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1519F/production/_114813468_hi061420886.jpg",
          "publishedAt": "2020-10-08T19:27:00Z",
          "content": "image captionBury St Edmunds has seen a rise in coronavirus cases\r\nEast and west Suffolk have been added to a Covid-19 watchlist by Public Health England. \r\nThere has been an increase in cases in tow… [+2482 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Manchester Evening News"
          },
          "author": "John Scheerhout",
          "title": "The latest coronavirus infection figures for Greater Manchester as one borough sees cases double in a week - Manchester Evening News",
          "description": "Every borough in Greater Manchester has rates well above the national average",
          "url": "https://www.manchestereveningnews.co.uk/news/greater-manchester-news/latest-coronavirus-infection-figures-greater-19074894",
          "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/incoming/article19033789.ece/ALTERNATES/s1200/1_Bolton-The-Epicentre-Of-Rising-Coronavirus-Cases-In-The-UK.jpg",
          "publishedAt": "2020-10-08T19:23:00Z",
          "content": "Coronavirus infection continues to rise across all of Greater Manchester, with the disease doubling in Trafford within a week\r\nThe borough of Manchester registered 543 positive cases for every 100,00… [+2493 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Denis Campbell, Helen Pidd, Josh Halliday",
          "title": "Hospitals in north of England 'to run out of Covid beds within a week' - The Guardian",
          "description": "Health chiefs warn they plan to ditch routine surgery as second wave seriously disrupts NHS",
          "url": "https://www.theguardian.com/world/2020/oct/08/hospitals-in-north-of-england-to-run-out-of-covid-beds-within-a-week",
          "urlToImage": "https://i.guim.co.uk/img/media/b1e63ee438459baeae3b96a88798f3e1400a74b3/0_742_5644_3386/master/5644.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e4cf095ba86fafbb6cf01f41508734fd",
          "publishedAt": "2020-10-08T19:09:00Z",
          "content": "Some hospitals in the north of England are set to run out of beds for Covid patients within two weeks, health chiefs are warning, amid growing signs that the diseases fast-unfolding second wave will ser… [+6898 chars]"
        }
      ]
    }
    return data;
  }
}
