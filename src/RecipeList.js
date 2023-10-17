import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <tbody>
      {recipes.map((recipe, index) => (
        <tr key={index}>
          <td data-label="Name:">{recipe.name}</td>
          <td data-label="Cuisine:">{recipe.cuisine}</td>
          <td data-label="Photo:">
            <img src={recipe.photo} alt={recipe.name} />
            {console.log(recipe.photo)}
          </td>
          <td data-label="Ingredients:" className="content_td">
            <p>{recipe.ingredients}</p>
          </td>
          <td data-label="Preperation:" className="content_td">
            <p>{recipe.preparation}</p>
          </td>
          <td data-label="Remove:">
            <button name="delete" onClick={() => deleteRecipe(index)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default RecipeList;
