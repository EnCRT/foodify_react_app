export function Modal ({ meal, setModalVisibility, MealsSaver }) {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strInstructions,
    strYoutube,
    strSource,
  } = meal;

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Details</p>
          <button
            className="delete"
            onClick={() => setModalVisibility(false)}
            aria-label="close">
          </button>
        </header>
        <section className="modal-card-body">
        <div className="content">
          <figure className="image is-4by3">
            <img src={strMealThumb} alt="Placeholder image" />
          </figure>
          <h1>{strMeal}</h1>
          <p>Below is the recipe for the dish and the ingredients you need. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
          <h2>Required Ingredients</h2>

          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
            <li>Vivamus maximus ultricies pulvinar.</li>
          </ol>

          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </ul>

          <h3>Instructions</h3>
          <p>
            {strInstructions}
          </p>

          <article className="message is-primary">
            <div className="message-body">
                <p><strong>Source links:</strong></p>
                <a href={strYoutube}>Youtube Guide</a> <br />
                <a href={strSource}>Source</a>
            </div>
          </article>
          

        </div>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            onClick={() => {
              setModalVisibility(false)
              MealsSaver(meal)
            }}
          >
            OK
          </button>
          <button
            className="button"
            onClick={() => setModalVisibility(false)}
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}