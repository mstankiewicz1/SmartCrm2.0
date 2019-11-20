import React from 'react';
import SingleIssue from './SingleIssue';

const IssuesList = (props) => {


    const active = props.listCases.filter(singleCase => singleCase.active);
    const done = props.listCases.filter(singleCase => !singleCase.active);

    const issuesActive = active.map(singleCase =>
        <SingleIssue
            key={singleCase.id}
            singleCase={singleCase}
        />
    );

    const issuesDone = done.map(singleCase =>
        <SingleIssue
            key={singleCase.id}
            singleCase={singleCase}
        />
    );

    return (
        <div className="thingList">
            <div className="active">
                <h2>Sprawy w toku <em>({active.length})</em></h2>
                {issuesActive.length > 0  ? issuesActive : <p className="comunicatNoThings">Brak spraw</p>}
            </div>


            <div className="done">
                <h2>Sprawy zakończone <em>({done.length})</em></h2>
                {issuesDone}
            </div>
        </div>
    )
};

export default IssuesList;