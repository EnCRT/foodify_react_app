import { FoodCard } from './FoodCard';

export function SavedMealsPage ({ savedMeals, MealsRemover }) {

  console.log(savedMeals);
  return (
    <div className="hero-body saved-meals">
      {savedMeals.map(meal => {
        return <FoodCard meal={meal} MealsRemover={MealsRemover} />
      }) }

    </div>
  )
}