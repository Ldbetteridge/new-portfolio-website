interface Props {
  active: number;
}

const NavBar = ({ active }: Props) => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={active === 0 ? "nav-item active" : "nav-item"}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className={active === 1 ? "nav-item active" : "nav-item"}>
              <a className="nav-link" href="/photography">
                Photography
              </a>
            </li>
            <li className={active === 2 ? "nav-item active" : "nav-item"}>
              <a className="nav-link" href="/programming">
                Programming
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
