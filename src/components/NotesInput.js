import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        };
    

    this.onTitleChangeListener = this.onTitleChangeListener.bind(this);
    this.onBodyChangeListener = this.onBodyChangeListener.bind(this);
    this.onSubmitListener = this.onSubmitListener.bind(this);
    }

    onTitleChangeListener(event) {
        const { value } = event.target;

        this.setState((prevState) => {
            return {
                ...prevState,
                title: value.length > 50 ? value.slice(0, 50) : value,
            };
        });
    }

    onBodyChangeListener(event) {
       this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            };
        });
    }

    onSubmitListener(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: "", body: "" });
    }

    render() {
        const { title, body } = this.state;
    
    return (
        <div className='notes-app__input'>
            <form>
                <input 
                type='text' 
                placeholder='Title'
                onChange={this.onTitleChangeListener}
                value={title} 
                required
                />
                <p>{title.length}/50</p>
                <textarea 
                type='text' 
                placeholder='Write your note'
                onChange={this.onBodyChangeListener}
                value={body} 
                required
                />
                <button type='submit' >Create</button>
            </form>
        </div>
        )
    }
}

export default NotesInput;