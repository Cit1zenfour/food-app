import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "./MealList";

const Category = () => {
    const {name} = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals))
    }, [name])

    return (
       <>
           {!meals.length ? <Preloader/> : <MealList meals={meals} />}
       </>
    )

}

export default Category