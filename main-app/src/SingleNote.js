import React from 'react';


const SingleNote = (props) => {


    const {text, id} = props.note;

        return (
            <div>
                    <p className="singleParagraphNote"><em>{id + 1}. </em>{text}</p>
            </div>

        )
};

export default SingleNote;