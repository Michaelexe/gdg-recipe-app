import React from "react";
import axios from "axios";

function AddRecipe({ setCreate }) {
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/recipe", {
        title: e.target.title.value,
        instructions: e.target.instructions.value,
        ingredients: e.target.ingredients.value,
      })
      .then((res) => {
        console.log(res.data);

        setCreate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="create-recipe">
      <form className="create-form" onSubmit={submitHandler}>
        <input type="text" placeholder="title" name="title" />
        <textarea type="text" placeholder="ingredients" name="ingredients" />
        <textarea type="text" placeholder="instructions" name="instructions" />
        <button className="orange-button">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
