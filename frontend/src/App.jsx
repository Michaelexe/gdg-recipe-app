import React, { useEffect, useState } from "react";
import AddRecipe from "./components/AddRecipe";
import axios from "axios";

function App() {
  const [create, setCreate] = useState(false);
  const [recipe, setRecipe] = useState([]);

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

  return (
    <div className="main-container">
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

export default App;
