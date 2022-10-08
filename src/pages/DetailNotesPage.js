import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import NotesDetail from '../components/NotesDetail';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/network-data';
import PageNotFound from './PageNotFound';

export default function DetailNotesPage() {
  const { id } = useParams();
  const [note, setNote] = React.useState('');
  const [loader, setLoader] = React.useState(true);

  const navigate = useNavigate();

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate('/archives');
  }
  async function onUnArchiveHandler(id) {
    await unarchiveNote(id);
    navigate('/');
  }
  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate('/');
  }

  React.useEffect(() => {
    const getDetailNote = async () => {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
      setLoader(false);
    };

    getDetailNote();
  }, [id]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {note ? (
        <NotesDetail
          note={note}
          onArchive={onArchiveHandler}
          onUnArchive={onUnArchiveHandler}
          onDelete={onDeleteHandler}
        />
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
