export function NavMobile ({ setPage, setAddFormVisibility }) {

  return (

    <div className="nav-mobile">
      <div className="nav-mobile-actions">
        <a className="navbar-item" href="/foodify_react_app">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
        <a role="button" class="navbar-burger navbar-burger-mobile" aria-label="menu" aria-expanded="false"
            onClick={() => {
              document.querySelector('.navbar-burger').classList.toggle("is-active");
              document.querySelector('.nav-mobile').style.transform= 'translateY(-100%)';
            }}
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
        <a
          className="navbar-item"
          onClick={() => {
            setPage('random');
            document.querySelector('.navbar-burger').classList.toggle("is-active");
            document.querySelector('.nav-mobile').style.transform= 'translateY(-100%)';
          }}
        >
          Random Meal
        </a>

        <a
          className="navbar-item "
          onClick={() => {
            setPage('saved');
            document.querySelector('.navbar-burger').classList.toggle("is-active");
            document.querySelector('.nav-mobile').style.transform= 'translateY(-100%)';
          }}
        >
          Saved Meal
        </a>

        <a
          className="navbar-item"
          onClick={() => {
            setAddFormVisibility(true);
            document.querySelector('.navbar-burger').classList.toggle("is-active");
            document.querySelector('.nav-mobile').style.transform= 'translateY(-100%)';
          }}
        >
          Add New Meal
        </a>
    </div>
  )
}