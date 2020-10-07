import philiaService from "#root/adapters/philiaService";

const GetPhiliaHealth = {
    Philia: async getPhiliaHealth => {
      return await philiaService.getHealth({ recipe: getPhiliaHealth.recipe, health: getPhiliaHealth.health});
  }
};

export default GetPhiliaHealth;
