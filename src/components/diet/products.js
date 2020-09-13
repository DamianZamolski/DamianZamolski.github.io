const createProduct = (name, proteins, fats, carbohydrates) => ({
  name,
  proteins,
  fats,
  carbohydrates,
})

export const bananas = createProduct('Bananas', 0.0109, 0.0033, 0.2284)
export const butter = createProduct('Butter', 0, 1, 0)
export const chickpeas = createProduct('Chickpeas', 0.062, 0.022, 0.14)
export const eggs = createProduct('Eggs', 0.1256, 0.0951, 0.0072)
export const hazelnuts = createProduct('Hazelnuts', 0.1495, 0.6075, 0.167)
export const kfdWpc = createProduct('KFD WPC', 0.78, 0.07, 0.05)
export const mctOil = createProduct('MCT Oil', 0, 1, 0)
export const oats = createProduct('Oats', 0.1315, 0.0652, 0.677)
