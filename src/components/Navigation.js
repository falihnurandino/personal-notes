import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';
import {
  MdGTranslate,
  MdOutlineDarkMode,
  MdOutlineWbSunny,
  MdLogout,
  MdArchive,
} from 'react-icons/md';

export default function Navigation({ logout, name }) {
  const { toggleLocale } = React.useContext(LocaleContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button
            className="toggle-locale"
            type="button"
            onClick={toggleLocale}
          >
            <MdGTranslate />
          </button>
        </li>
        <li>
          <Link to="/archives">
            <MdArchive className="icon" />
          </Link>
        </li>
        <li>
          <button className="toggle-theme" type="button" onClick={toggleTheme}>
            {theme === 'light' ? (
              <MdOutlineDarkMode className="icon" />
            ) : (
              <MdOutlineWbSunny className="icon" />
            )}
          </button>
        </li>
        <li>
          <button className="button-logout" type="button" onClick={logout}>
            <MdLogout className="icon" />
            {name}
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
