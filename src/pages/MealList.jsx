import React from "react";
import Meal from "./Meal";
import {useHistory} from 'react-router-dom'

const MealList = ({meals}) => {
    const {goBack} = useHistory()

    return (
        <>
            <button onClick={goBack} className="btn">Go Back</button>
            <div className='list'>
                {meals.map(el => (
                    <Meal key={el.idMeal} {...el} />
                ))}
            </div>
        </>
    )
}

export default MealList