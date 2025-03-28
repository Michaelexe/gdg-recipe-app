import React from "react";

function RecipePost({ recipe }) {
  return (
    <div className="recipe-post">
      <h1>{recipe.title}</h1>
      <ul>
        {recipe.ingredients.split(", ").map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <ul>
        {recipe.instructions.split(", ").map((instructions) => {
          return <li>{instructions}</li>;
        })}
      </ul>
    </div>
  );
}

export default RecipePost;
