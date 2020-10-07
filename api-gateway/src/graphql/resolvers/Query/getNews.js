import NewsService from "#root/adapters/NewsService";

const NewsResolver = async () => {
  return await NewsService.getNews();
};

export default NewsResolver;
