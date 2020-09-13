const createProduct = (name, proteins, fats, carbohydrates) => ({
  name,
  proteins: proteins / 100,
  fats: fats / 100,
  carbohydrates: carbohydrates / 100,
})

export const bananas = createProduct('Bananas', 1.09, 0.33, 22.84)
export const chickpeas = createProduct('Chickpeas', 6.2, 2.2, 14)
export const eggs = createProduct('Eggs', 12.56, 9.51, 0.72)
export const hazelnuts = createProduct('Hazelnuts', 14.95, 60.75, 16.7)
export const kerrygoldButter = createProduct('Kerrygold Butter', 0.7, 82.5, 0.7)
export const kfdWpc = createProduct('KFD WPC', 78, 7, 5)
export const mctOil = createProduct('MCT Oil', 0, 100, 0)
export const oats = createProduct('Oats', 13.15, 6.52, 67.7)
