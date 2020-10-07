const getPhiliaHealthResolver = async (obj, args, context) => {
  return context.res.locals.getPhiliaHealth;
};

export default getPhiliaHealthResolver;
