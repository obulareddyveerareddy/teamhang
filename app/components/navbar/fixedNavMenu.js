import React from 'react';
import * as M from 'materialize-css/dist/js/materialize';

const FixedNavbar = () => {
  React.useEffect(() => {
    const elements = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elements, {});
  }, []);
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0 light-blue accent-1">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo black-text text-dark-4">
            Logo
          </a>
          <a
            href="#/"
            data-target="mobile-demo"
            className="sidenav-trigger black-text text-dark-4"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html" className="black-text text-dark-4">
                Sass
              </a>
            </li>
            <li>
              <a href="badges.html" className="black-text text-dark-4">
                Components
              </a>
            </li>
            <li>
              <a href="collapsible.html" className="black-text text-dark-4">
                Javascript
              </a>
            </li>
            <li>
              <a href="mobile.html" className="black-text text-dark-4">
                Mobile
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </div>
  );
};

export default FixedNavbar;
