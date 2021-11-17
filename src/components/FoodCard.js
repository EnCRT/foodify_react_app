import { Modal } from './Modal';
import { useState } from 'react';

export function FoodCard ({ meal, MealsSaver, MealsRemover, getMeal, setMeal, setLoading } ) {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strTags,
    strYoutube,
    strSource,
  } = meal;

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={`${strMealThumb}`} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{strMeal}</p>
              <a href={strYoutube}>Youtube Guide</a>
            </div>
          </div>

          <div className="content">
            <p>
              Click on the "All Info" button to get more instructions.
            </p>
            Resources: <br />
            
            <a
              href={strSource}
              target="_blank"
              rel="noreferrer"
            >
              themealdb.com
            </a><br />
            {strTags
              ? strTags.split(',').map(tag => {
              return <a href="#"> #{tag}</a>
            })
              : null
          }
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>

          <div className="buttons">
            { MealsSaver
              ? <button
                  className="button is-primary is-light"
                  onClick={() => {
                    MealsSaver(meal)
                  }}
                >
                  Save
                </button>
              : <button
                  className="button is-danger"
                  onClick={() => MealsRemover(idMeal)}
                >
                  Delete
                </button>
            }
            <button
              className="button is-link is-light"
              onClick={() => setModalVisibility(true)}
            >
              All info
            </button>
            {getMeal
              ? <button
                  className="button is-warning is-light"
                  onClick={ () => {
                    (async () => {
                      let mealFromApi = await getMeal();
                      
                      setMeal(mealFromApi);
                      setLoading(false);
                    })()
                  }}
                >
                  Next
                </button>
              : null
            }
          </div>
        </div>
      </div>
      
      {
        modalVisibility
        ? <Modal
          meal={meal}
          setModalVisibility={setModalVisibility}
          MealsRemover={MealsRemover}
          MealsSaver={MealsSaver}
        />
        : <></>
      }
    </>
  )
}