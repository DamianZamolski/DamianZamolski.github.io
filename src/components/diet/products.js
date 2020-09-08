const createProduct = (name, proteins, fats, carbohydrates) => ({
  name,
  proteins,
  fats,
  carbohydrates,
})

export const banana = createProduct('Banana', 0.0109, 0.0033, 0.2284)
export const kfdWpc = createProduct('KFD WPC', 0.78, 0.07, 0.05)
