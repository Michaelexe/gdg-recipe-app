import React, { useEffect, useState } from "react";
import AddRecipe from "./components/AddRecipe";
import axios from "axios";
import Login from "./components/Login";
import RecipePost from "./components/RecipePost";

function App() {
  const [create, setCreate] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipe")
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (user) {
    return <Login setUser={setUser} />;
  } else if (recipe[0]) {
    return (
      <div className="main-container">
        {recipe.map((r) => {
          return <RecipePost recipe={r} />;
        })}
        <button
          className="orange-button"
          onClick={() => {
            setCreate(true);
          }}
        >
          Create Recipe
        </button>
        {create ? <AddRecipe setCreate={setCreate} /> : null}
      </div>
    );
  }
}

export default App;
