import React from 'react';


const SingleNote = (props) => {


    const {text, id} = props.note;

        return (
            <div>
                <p>
                    <p><em>{id + 1}. </em>{text}</p>
                </p>
            </div>

        )
};

export default SingleNote;