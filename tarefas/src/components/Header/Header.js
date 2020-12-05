import { Link, NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <nav id="header-nav">
      <div className="container">
        <Link
          to="/home"
          id="header-logo"
        >
            Home
        </Link>
        <div className="header-float-right">
          <NavLink
            to="/Nova-Tarefa"
            className="header-menu"
          >
            Nova Tarefa
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;