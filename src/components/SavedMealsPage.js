import { FoodCard } from './FoodCard';

export function SavedMealsPage ({ savedMeals, MealsRemover }) {

  return (
    <div className="hero-body saved-meals">
        {
          savedMeals.length
            ? <>
                {savedMeals.map(meal => {
                  return <FoodCard meal={meal} MealsRemover={MealsRemover} />
                })}
              </>
            : <article class="message is-info">
                <div class="message-body">
                  Saved meals page <br /> <strong>Please, seve your meal</strong>.
                </div>
              </article>
        }
    </div>
  )
}