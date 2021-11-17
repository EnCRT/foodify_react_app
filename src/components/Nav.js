export function Nav ({ setPage, setAddFormVisibility }) {

  return (
    <nav className="navigation" role="navigation" aria-label="main navigation">
      <a className="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>
      <a
        className="navbar-item navigation-link"
        onClick={() => setPage('random')}
      >
        Random Meal
      </a>

      <a
        className="navbar-item navigation-link"
        onClick={() => setPage('saved')}
      >
        Saved Meal
      </a>

      <a
        className="navbar-item navigation-link"
        onClick={() => setAddFormVisibility(true)}
      >
        Add New Meal
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
        onClick={() => {
          document.querySelector('.navbar-burger').classList.toggle("is-active");
          document.querySelector('.nav-mobile').style.transform= 'translateY(0%)';
        }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  )
}