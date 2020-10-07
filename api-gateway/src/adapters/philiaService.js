import got from "got";

export default class philiaService {
  static async getHealth({ recipe, health }) {
    const body = await got.get(`https://api.philodi.com/alexa/health?q=${recipe}&health=${health}`).json();
    return body;
  }
  
}
