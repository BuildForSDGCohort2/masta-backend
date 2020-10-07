import got from "got";

export default class NewsService {
  static async getNews() {
    const body = await got.get(`https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&apiKey=edcac9c2aa1e444fb95914793fab0788&category=health`).json();
    return body;
  }
}
