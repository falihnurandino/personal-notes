import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { HiPlus } from 'react-icons/hi';
import LocaleContext from '../contexts/LocaleContext';
import Loader from '../components/Loader';
import { getActiveNotes } from '../utils/network-data';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getNotes = async () => {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
      setLoader(false);
    };
    getNotes();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes
    ? notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
      })
    : [];

  if (loader) {
    return <Loader />;
  }

  return (
    <section>
      <h2 tabIndex="0">{locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
      <div className="homepage__action">
        <Link to="/notes/new">
          <HiPlus className="icon" />
        </Link>
      </div>
    </section>
  );
}
