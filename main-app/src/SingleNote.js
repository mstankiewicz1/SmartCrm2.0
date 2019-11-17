import React from 'react';


const SingleNote = (props) => {


    const {text} = props.note;

        return (
            <div>
                <p>
                    <p>{text}</p>
                </p>
            </div>
        )
};

export default SingleNote;