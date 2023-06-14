import React, { useState } from "react";
import RecipeData from "./RecipeData";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import "./App.css";

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    const deleteRecipe = (recipeAti) => {
        setRecipes((prevRecipes) =>
            prevRecipes.filter((recipe, i) => i !== recipeAti)
        );
    };

    const createRecipe = (createdRecipe) => {
        setRecipes([...recipes, createdRecipe]);
    };

    return (
        <div className="App">
            <div className="title">
                <header>
                    <h1 className="header-title">Delicious Food Recipes</h1>
                </header>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Photo</th>
                        <th>Ingredients</th>
                        <th>Preparation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
                </tbody>
            </table>
            <RecipeCreate addRecipe={createRecipe} />
        </div>
    );
}

export default App;
