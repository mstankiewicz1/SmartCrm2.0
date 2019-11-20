import React from 'react';
import SingleIssue from './SingleIssue';

const IssuesList = (props) => {


    const active = props.listCases.filter(singleCase => singleCase.active);
    const done = props.listCases.filter(singleCase => !singleCase.active);

    const issuesActive = active.map(singleCase =>
        <SingleIssue
            key={singleCase.id}
            singleCase={singleCase}
            change={props.change}
        />
    );

    const issuesDone = done.map(singleCase =>
        <SingleIssue
            key={singleCase.id}
            singleCase={singleCase}
            change={props.change}
        />
    );

    return (
        <div className="issuesList">
            <div className="active">
                <h4>Sprawy w toku <em>({active.length})</em></h4>
                {issuesActive.length > 0  ? issuesActive : <p className="communicateNoIssues">Brak spraw</p>}
            </div>


            <div className="done">
                <h4>Sprawy zakończone <em>({done.length})</em></h4>
                {issuesDone}
            </div>
        </div>
    )
};

export default IssuesList;