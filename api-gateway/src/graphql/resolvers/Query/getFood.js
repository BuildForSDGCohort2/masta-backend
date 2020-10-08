import FoodService from "#root/adapters/FoodService";

const FoodResolver = async () => {
  return await console.log(FoodService.getFood());
};

export default FoodResolver;

