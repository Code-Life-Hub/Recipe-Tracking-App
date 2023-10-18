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
          </td>
          <td data-label="Ingredients:" className="content_td">
            <ol>
              {Array.isArray(recipe.ingredients) &&
                recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>
                    <input type="checkbox" id={`ingredient-${index}-${i}`} />
                    <label htmlFor={`ingredient-${index}-${i}`}>
                      {ingredient}
                    </label>
                  </li>
                ))}
            </ol>
          </td>
          <td data-label="Preparation:" className="content_td">
            <ol className="prepList">
              {Array.isArray(recipe.preparation) &&
                recipe.preparation.map((step, i) => (
                  <li key={i}>
                    <input type="checkbox" id={`step-${index}-${i}`} />
                    <label htmlFor={`step-${index}-${i}`}>{step}</label>
                  </li>
                ))}
            </ol>
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
