import React from 'react';


const SingleBankNumber = (props) => {


    const {number, id} = props.num;

    return (
        <div>
            <p className="singleParagraphNote">{number}</p>
        </div>

    )
};

export default SingleBankNumber;