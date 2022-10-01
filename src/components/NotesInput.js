import React from 'react';
import PropTypes from 'prop-types';

export default class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: value.length > 50 ? value.slice(0, 50) : value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="notes-app__input">
        <form onSubmit={this.onSubmitChangeEventHandler}>
          <p>{this.state.title.length}/50</p>
          <input
            type="text"
            placeholder="Title"
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
            required
          />

          <div
            className="notes-app__input-body"
            data-placeholder="Write your note"
            contentEditable
            onInput={this.onBodyChangeEventHandler}
            required
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
