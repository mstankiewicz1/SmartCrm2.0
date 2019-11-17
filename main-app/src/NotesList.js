import React from 'react';
import SingleNote from './SingleNote';

const NotesList = (props) => {


    const notes = props.list.map( note =>
        <SingleNote
            key={note.id}
            note={note}
        />
    );

    return (
        <div className="noteList">
                <h2>Historia notatek</h2>
                <p>{notes}</p>
        </div>
    )
};

export default NotesList;