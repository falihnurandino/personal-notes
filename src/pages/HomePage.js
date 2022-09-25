import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { getAllNotes } from '../utils/local-data';
import { FaPlusCircle } from 'react-icons/fa';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || '',
      notes: getAllNotes(),
    };
    this.deleteNotesHandler = this.deleteNotesHandler.bind(this);
    this.archiveNotesHandler = this.archiveNotesHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  deleteNotesHandler(id) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  archiveNotesHandler(id) {
    const { notes } = this.state;
    notes.forEach((note) => {
      if (note.id === id) note.archived = !note.archived;
    });
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  notesList() {
    const { keyword, notes } = this.state;

    const list = keyword.trim().length
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
      : notes;

    return list.sort((a, b) => a.date - b.date).reverse();
  }

  render() {
    return (
      <section>
        <h2>Active Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={this.notesList().filter((note) => !note.archived)} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <FaPlusCircle className="icon" />
          </Link>
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
