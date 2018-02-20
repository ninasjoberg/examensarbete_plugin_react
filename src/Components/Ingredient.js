import React from 'react';
import './ingredient.css';


export default function Ingredient(props){
    return(
        <li className='ingredientList'>
            <p className='ingredientItem'>{props.amount}</p>
            <p className='ingredientItem'>{props.type}</p>
            <p className='ingredientItem'>{props.name}</p>
        </li>
    )
}