import React from 'react';
import PropTypes from 'prop-types';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import showFormattedDate from '../utils';

export default function NotesDetail({
  note,
  onDelete,
  onArchive,
  onUnArchive,
}) {
  const { id, title, body, archived, createdAt } = note;
  const formattedDate = showFormattedDate(createdAt);
  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <time className="detail-page__createdAt"> {formattedDate}</time>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <ArchiveButton
          id={id}
          archived={archived}
          onArchive={onArchive}
          onUnArchive={onUnArchive}
        />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </section>
  );
}

NotesDetail.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
};
