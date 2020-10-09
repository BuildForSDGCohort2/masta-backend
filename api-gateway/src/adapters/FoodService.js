import got from "got";

export default class FoodService {
  static async getFood() {
    const body = await got.get(`https://api.philodi.com/alexa/health?q=chicken&health=sugar-conscious`).json();
    return body;
  }
}
