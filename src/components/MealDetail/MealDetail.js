import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const [meals, setMeals] = useState([]);
    const {idMeal} = useParams();


    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals[0]))
    },[])

    const {strMeal, strMealThumb} = meals;
    return (
        <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src= { strMealThumb } alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2 text-center"> { strMeal } </h2>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
        <button>Place Order</button>
  </div>
</div>
        </div>
    );
};

export default MealDetail;