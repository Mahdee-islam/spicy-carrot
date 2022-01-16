import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ( { meal } ) => {

    const {strMeal, strMealThumb, idMeal} = meal;

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
    <Link to = { `/placeorder/${idMeal}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> Detail {strMeal.slice(0,10)} </Link>
  </div>
</div>
        </div>
    );
};

export default Meal;