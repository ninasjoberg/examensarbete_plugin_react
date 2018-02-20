import React from 'react';
import './ingredient.css';


export default function Ingredient(props){
    return(
        <li className='ingredientList'>
            {props.amount && <p className='ingredientItem'>{props.amount}</p>}
            {props.type && <p className='ingredientItem'>{props.type}</p>}
            <p className='ingredientItem'>{props.name}</p>
        </li>
    )
}