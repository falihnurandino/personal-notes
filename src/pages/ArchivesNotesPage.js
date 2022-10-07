import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../contexts/LocaleContext';
import Loader from '../components/Loader';
import { getArchivedNotes } from '../utils/network-data';

export default function ArchivesNotesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [loader, setLoader] = React.useState(true);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    const getNotes = async () => {
      const { error, data } = await getArchivedNotes();
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
      <h2 tabIndex="0">
        {locale === 'en' ? 'Archive Notes' : 'Catatan Arsip'}
      </h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={filteredNotes} />
    </section>
  );
}
