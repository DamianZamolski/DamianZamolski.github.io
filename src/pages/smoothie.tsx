import Link from '@/Link';
import Meal from '@/Meal';
import banana from '@/Meal/products/banana';
import kfdWpcSaltedCarmel from '@/Meal/products/kfdWpcSaltedCarmel';
import milletFlakes from '@/Meal/products/milletFlakes';
import Section from '@/Section';

export default function SmoothiePage() {
  return (
    <>
      <nav>
        <Link target='/'>Home</Link>
      </nav>
      <Section heading='Smoothie'>
        <Meal
          ingredients={[
            { product: kfdWpcSaltedCarmel, massInGrams: 30 },
            { product: milletFlakes, massInGrams: 80 },
            { product: banana, massInGrams: 120 },
          ]}
        />
      </Section>
    </>
  );
}
