interface MealProps {
  ingredients: Array<Ingredient>;
}

interface Ingredient {
  product: Product;
  massInGrams: number;
}

export interface Product {
  name: string;
  macros: Macros;
}

interface Macros {
  proteinsPercentage?: number;
  fatsPercentage?: number;
  carbohydratesPercentage?: number;
  sugarsPercentage?: number;
}

export default function Meal({ ingredients }: MealProps) {
  const { mass, proteins, fats, carbohydrates, sugars } = ingredients.reduce(
    (
      result,
      {
        product: {
          macros: {
            proteinsPercentage = 0,
            fatsPercentage = 0,
            carbohydratesPercentage = 0,
            sugarsPercentage = 0,
          },
        },
        massInGrams,
      }
    ) => {
      result.mass += massInGrams;
      result.proteins += (massInGrams * proteinsPercentage) / 100;
      result.fats += (massInGrams * fatsPercentage) / 100;
      result.carbohydrates += (massInGrams * carbohydratesPercentage) / 100;
      result.sugars += (massInGrams * sugarsPercentage) / 100;
      return result;
    },
    { mass: 0, proteins: 0, fats: 0, carbohydrates: 0, sugars: 0 }
  );

  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Mass (g)</th>
          <th scope='col'>Proteins (g)</th>
          <th scope='col'>Fats (g)</th>
          <th scope='col'>Carbohydrates (g)</th>
          <th scope='col'>Sugars (g)</th>
        </tr>
        <tr>
          <th scope='row'>TOTAL</th>
          <TableHeaderNumberCell>{mass}</TableHeaderNumberCell>
          <TableHeaderNumberCell>{proteins}</TableHeaderNumberCell>
          <TableHeaderNumberCell>{fats}</TableHeaderNumberCell>
          <TableHeaderNumberCell>{carbohydrates}</TableHeaderNumberCell>
          <TableHeaderNumberCell>{sugars}</TableHeaderNumberCell>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient) => (
          <Ingredient {...ingredient} key={ingredient.product.name} />
        ))}
      </tbody>
    </table>
  );
}

interface TableNumberCellProps {
  children: number;
}

function TableHeaderNumberCell({ children }: TableNumberCellProps) {
  return <th className='number'>{children.toFixed(1)}</th>;
}

function Ingredient({
  product: {
    name,
    macros: {
      proteinsPercentage = 0,
      fatsPercentage = 0,
      carbohydratesPercentage = 0,
      sugarsPercentage = 0,
    },
  },
  massInGrams,
}: Ingredient) {
  const proteinsGrams = (massInGrams * proteinsPercentage) / 100;
  const fatsGrams = (massInGrams * fatsPercentage) / 100;
  const carbohydratesGrams = (massInGrams * carbohydratesPercentage) / 100;
  const sugarsGrams = (massInGrams * sugarsPercentage) / 100;

  return (
    <tr>
      <th scope='row'>{name}</th>
      <TableNumberCell>{massInGrams}</TableNumberCell>
      <TableNumberCell>{proteinsGrams}</TableNumberCell>
      <TableNumberCell>{fatsGrams}</TableNumberCell>
      <TableNumberCell>{carbohydratesGrams}</TableNumberCell>
      <TableNumberCell>{sugarsGrams}</TableNumberCell>
    </tr>
  );
}

function TableNumberCell({ children }: TableNumberCellProps) {
  return <td className='number'>{children.toFixed(1)}</td>;
}
