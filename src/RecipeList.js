import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
    return (
        <tbody>
            {recipes.map((recipe, index) => (
                <tr key={index}>
                    <td>{recipe.name}</td>
                    <td>{recipe.cuisine}</td>
                    <td>
                        <img src={recipe.photo} alt={recipe.name} />
                        {console.log(recipe.photo)}
                    </td>
                    <td className="content_td">
                        <p>{recipe.ingredients}</p>
                    </td>
                    <td className="content_td">
                        <p>{recipe.preparation}</p>
                    </td>
                    <td>
                        <button
                            name="delete"
                            onClick={() => deleteRecipe(index)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default RecipeList;
