import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])


    const handleClickText = e => {
        const searchTextValue  = e.target.value;
        setSearchText(searchTextValue);
    }

    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])



    return (
        <div>
            <form action="
            ">
                <input onChange={handleClickText} type="text" placeholder='search your food here' />
                <input type="button" value="Search" />
            </form>

        <div className='grid grid-cols-3 my-4'>
          {
              meals.map(meal => <Meal meal = { meal } key={meal.idMeal}></Meal>)
          }
        </div>

        </div>
    );
};

export default Restaurant;