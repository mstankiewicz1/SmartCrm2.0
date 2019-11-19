import React from 'react';
import SingleIssue from './SingleIssue';

const IssuesList = (props) => {


    const cases = props.listCases.map(singleCase =>
        <SingleIssue
            key={singleCase.id}
            singleCase={singleCase}
        />
    );

    return (
        <div className="thingList">
            <div className="active">
                <h2>Lista spraw <em>({cases.length})</em></h2>
                {cases.length > 0  ? cases : <p className="comunicatNoThings">Brak rzeczy do kupienia</p>}
            </div>
        </div>
    )
};

export default IssuesList;