import React from 'react';
import { Link } from 'react-router-dom';


const AddActivity = () => {


    return (
        <div className="addActivityContainer">
            <div className="areaActivityButtons">
                    <Link to="/Issues"><button className="activityButtons">Sprawy</button></Link>
                    <Link to="/Contact"><button className="activityButtons">Kontakty</button></Link>
                    <Link to="/Sale"><button className="activityButtons">Sprzedaż</button></Link>
            </div>
        </div>
    )
};


export default AddActivity;