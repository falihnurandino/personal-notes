import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AddPage from './pages/AddPage';
import ArchivesNotesPage from './pages/ArchivesNotesPage';
import DetailNotesPage from './pages/DetailNotesPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(
    localStorage.getItem('locale') || 'id'
  );
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || 'light'
  );

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  const toggleLocale = () => {
    setLocale((prevState) => {
      const newLocale = prevState === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  React.useEffect(() => {
    async function init() {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      }
      setInitializing(false);
    }

    init();
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (initializing) {
    return null;
  }

  return (
    <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <div className="notes-app">
          <header className="notes-app__header">
            <h1>
              <Link to="/">
                {locale === 'en' ? 'Notes App' : 'Aplikasi Catatan'}
              </Link>
            </h1>
            {authedUser ? (
              <Navigation logout={onLogout} name={authedUser.name} />
            ) : (
              ''
            )}
          </header>
          <main>
            {authedUser ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/:id" element={<DetailNotesPage />} />
                <Route path="/archives" element={<ArchivesNotesPage />} />
                <Route path="/notes/new" element={<AddPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            ) : (
              <Routes>
                <Route
                  path="*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            )}
          </main>
          <footer tabIndex="0">
            <p>Copyright &copy; 2022 Falih Nur Andino</p>
          </footer>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
