import React from 'react';


const SingleBankNumber = (props) => {


    const {number, id} = props.num;

    return (
        <div>
            <p className="singleParagraphNote"><em>{id + 1}. </em>{number}</p>
        </div>

    )
};

export default SingleBankNumber;