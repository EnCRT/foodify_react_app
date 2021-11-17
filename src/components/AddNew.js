import { useState } from 'react';

export function AddNew ({addFormVisibility, MealsSaver, setAddFormVisibility}) {
  const [title, setTitle] = useState('Title Placeholder');
  const [cat, setCat] = useState('Category Placeholder');
  const [instructions, setInstructions] = useState('Instructions Placeholder');

  const recipeCreator = (title, cat, instructions) => {
    const newRecipe = {
      'idMeal': Math.round(Math.random() * 1000),
      'strMeal': title,
      'strCategory': cat,
      'strInstructions': instructions,
      'strTags': 'Custom,Added',
      'strYoutube': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'strMealThumb': 'https://www.pngall.com/wp-content/uploads/2/Meal-PNG-Free-Image.png',
    };

    return newRecipe;
  }

  return (
    !addFormVisibility
      ? <></>
      : <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Add New Meal</p>
              <button class="delete" aria-label="close"
                onClick={() => setAddFormVisibility(false)}>
              </button>
            </header>
            <section class="modal-card-body">
              <div class="control">
                <input class="input" type="text" placeholder="Meal title"
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
                <input class="input" type="text" placeholder="Category"
                  onChange={(e) => {
                    setCat(e.target.value)
                  }}
                />
                <input class="input" type="text" placeholder="Instructions"
                  onChange={(e) => {
                    setInstructions(e.target.value)
                  }}
                />
              </div>
            </section>
            <footer class="modal-card-foot">
              <button
                class="button is-success"
                onClick={ () => {
                  MealsSaver(recipeCreator(title, cat, instructions));
                  setAddFormVisibility(false);
                }}
              >
                Save custom meal
              </button>
              <button
                class="button"
                onClick={() => setAddFormVisibility(false)}
              >
                Cancel
              </button>
            </footer>
          </div>
        </div>
  )
}
