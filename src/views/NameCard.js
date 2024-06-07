import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import EditNameCard from '../components/EditNameCard';
import '../index.css';

const NameCard = () => {

    // useSelector function for getting the specific reducer we need Used to get the
    // whole reducer object like getting characterReducer Get the whole state from
    // characterReducer
    const person = useSelector(state => state.characters);

    //Create local state for trigger edit form
    const [isEdit,
        setEdit] = useState(false);

    //Handle edit button onclick in name card
    const toggleEditBtn = () => {
        setEdit(!isEdit);
    }

    return (
        <section id="section-namecard">
            <h3 className="center-align white-text blue">Name Card</h3>
            <div className="card grey darken-1 namecard">
                <div className="card-content white-text">
                    <p id="card_1" className="card-title"><strong>{person.name}</strong></p>
                    <p id="card_3">Vị Trí: {person.occupation}</p>
                    <p id="card_2">Tuổi: {person.age}</p>
                    <div className="card-image"> 
                    <img src={person.avatar} alt="" /> 
                    </div>
                    <button
                        onClick={toggleEditBtn}
                        className="btn-floating halfway-fab waves-effect waves-light orange">
                        {isEdit
                            ? (
                                <i className="material-icons">clear</i>
                            )
                            : (
                                <i className="material-icons">create</i>
                            )
}</button>
                </div>
            </div>
            {isEdit && <EditNameCard/>
}

        </section>
    );
}

export default NameCard;