import { request } from './api';

export const getMeal = async (mealId) => {
  const urlForRequest = mealId
    ? `/lookup.php?i=${mealId}`
    : '/random.php';

  const meal = await request(urlForRequest);

  return meal.meals[0];
};
