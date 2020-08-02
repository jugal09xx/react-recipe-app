import React from "react";
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p className={style.calories}>{Math.floor(calories)} Calories</p>
      <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
      </ol>
      <img src={image} alt="item_image" />
    </div>
  );
};

export default Recipe;
