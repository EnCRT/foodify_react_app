export function Nav ({ setPage }) {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a
            className="navbar-item"
            onClick={() => setPage('random')}
          >
            Random Meal
          </a>

          <a
            className="navbar-item"
            onClick={() => setPage('saved')}
          >
            Added Meal
          </a>
        </div>
      </div>
    </nav>
  )
}