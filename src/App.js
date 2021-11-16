import { useState, useEffect } from 'react';
import { Nav } from './components/Nav'
import { Random } from './components/Random';
import { SavedMealsPage } from './components/SavedMealsPage'
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';

import { getMeal } from './components/API/getMeal';


import './App.css';

function App() {
  const [meal, setMeal] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [activePage, setPage] = useState('random');
  const [savedMeals, saveMeal] = useState([]);

  const MealsSaver = (meal) => {
    console.log(savedMeals);
    savedMeals.push(meal)
    saveMeal(savedMeals);
    console.log(savedMeals);
  };

  const MealsRemover = (id) => {
    const newMeals = savedMeals.filter(meal => {
      return meal.id === id;
    });
    saveMeal(newMeals);
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      let mealFromApi = await getMeal();
      
      setMeal(mealFromApi);
      setLoading(false);
    })();
  }, [activePage]);

  return (
    <div className="container is-fullhd">
      <div className="App">
        <Nav setPage={setPage} />
        <div className="container main-container is-fluid">
          <div className="notification is-primary">
              <p className="title">
                Foodify Application
              </p>
              <p className="subtitle">
                You need to create an application which will allow the user to get a random recipe and give him / her an ability to save it in the favorite dishes list. API <a href="https://www.themealdb.com/api.php">endpoint</a>. Task <a href="https://docs.google.com/document/d/15XyAsgQTlaFUdy6YOQg1nvLcB2MGfHND47S1_Y_nTT8/edit#">guideline</a>.
              </p>
          </div>
        </div>
        
        {
          activePage === 'random' 
            ? isLoading
                ? <Loading />
                : <Random
                    meal={meal}
                    MealsSaver={MealsSaver}
                    MealsRemover={MealsRemover}
                    getMeal={getMeal}
                    setMeal={setMeal}
                    setLoading={setLoading}
                  />
            : <SavedMealsPage savedMeals={savedMeals} MealsRemover={MealsRemover} />
        }
        <Footer />
      </div>
    </div>

    
  );
}

export default App;
