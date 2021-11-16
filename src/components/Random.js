import { FoodCard } from './FoodCard';
import { Loading } from './Loading';

export function Random ({meal, MealsSaver, MealsRemover, setPage, getMeal, setMeal, setLoading }, isLoading) {

  return (
    <div className="hero-body">

      
      { !isLoading
        ? <Loading />
        : <FoodCard
            meal={meal}
            MealsSaver={MealsSaver}
            MealsRemover={MealsRemover}
            getMeal={getMeal}
            setMeal={setMeal}
            setLoading={setLoading}
          />
      }
    </div>
  )
}