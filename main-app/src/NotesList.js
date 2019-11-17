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
        <div className="HistoryNotes">
            <div className="historyNotesDetail">
                <h4>Historia notatek</h4>
                <p>{notes.slice(0,5)}</p>
            </div>
        </div>
    )
};

export default NotesList;