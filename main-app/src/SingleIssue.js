import React from 'react';

const SingleIssue = (props) => {


    const style = {
        color: 'red',
    };


    const {title, category, text, important} = props.singleCase;

    return (
        <div>
            <p>
                <table>
                    <tbody>
                    <tr>
                        <td><strong style={important ? style : null}>{title} </strong></td>
                        <td><strong style={important ? style : null}>{category}</strong></td>
                        <td><strong style={important ? style : null}>{text}</strong></td>
                    </tr>
                    </tbody>
                </table>
            </p>
        </div>
    );
};

export default SingleIssue;