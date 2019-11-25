import React from 'react';
import { Link } from 'react-router-dom';


const AddActivity = () => {


    return (
            <div className="addActivityContainer">
                <div className="areaActivityButtons">
                        <Link to="/Issues"><button className="activityButtons">Dodaj Sprawę</button></Link>
                        <Link to="/Contact"><button className="activityButtons">Dodaj Kontakt</button></Link>
                        <Link to="/Sale"><button className="activityButtons">Dodaj Sprzedaż</button></Link>
                </div>
            </div>
    )
};


export default AddActivity;