import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { NavMobile } from './components/NavMobile';
import { AddNew } from './components/AddNew'
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
  const [addFormVisibility, setAddFormVisibility] = useState(false);
  const [savedMeals, saveMeal] = useState(
    JSON.parse(localStorage.getItem('savedMeals')) || []
  );

  const MealsSaver = (meal) => {
    if (!savedMeals.some( elem => elem.idMeal === meal.idMeal)) {
      savedMeals.push(meal);
      saveMeal(savedMeals);
      localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
    }
  };

  const MealsRemover = (id) => {
      const newMeals = savedMeals.filter(meal => {
        console.log(meal.idMeal, id);
        return meal.idMeal !== id;
      });
    saveMeal(newMeals);
    localStorage.setItem('savedMeals', JSON.stringify(newMeals));
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      let mealFromApi = await getMeal();
      
      setMeal(mealFromApi);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="container is-fullhd">
      <div className="App">
        <NavMobile setPage={setPage} setAddFormVisibility={setAddFormVisibility} />
        <Nav setPage={setPage} setAddFormVisibility={setAddFormVisibility} />
        <div className="container main-container is-fluid">
          <div className="notification is-primary">
              <p className="title">
                Foodify Application
              </p>
              <p className="subtitle">
              React app for generating random recipes for delicious dinner or breakfast ideas. Click the "Save" button so that you don't forget to prepare the dish later. Also, don't miss the opportunity to save your custom recipe to a book! Let's start? <br /> API <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.themealdb.com/api.php"
                >
                  endpoint 
                </a>. Task <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/document/d/15XyAsgQTlaFUdy6YOQg1nvLcB2MGfHND47S1_Y_nTT8/edit#"
                >
                  guideline.
                </a>
              </p>
          </div>
        </div>
        <AddNew
          addFormVisibility={addFormVisibility}
          setAddFormVisibility={setAddFormVisibility}
          MealsSaver={MealsSaver}
        />
        
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
