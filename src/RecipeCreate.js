import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
    const [recipe, setRecipe] = useState({
        name: "",
        cuisine: "",
        photo: "",
        ingredients: "",
        preparation: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
        console.log(name, value);
        console.log(recipe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe(recipe);
        setRecipe({
            name: "",
            cuisine: "",
            photo: "",
            ingredients: "",
            preparation: "",
        });
    };

    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr className = "createNew">
                        <td className="newName">
                            <input
                                name="name"
                                placeholder="Name of Dish"
                                value={recipe.name}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td className="newCuisine">
                            <input
                                name="cuisine"
                                placeholder="Type of Cuisine"
                                value={recipe.cuisine}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td className="newUrl">
                            <input
                                type="url"
                                name="photo"
                                placeholder="www.[YourImageUrlHere].com"
                                value={recipe.photo}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td className="ingredients">
                            <textarea
                                name="ingredients"
                                placeholder="Required Ingredients"
                                value={recipe.ingredients}
                                required={true}
                                onChange={handleChange}
                            />
                        </td>
                        <td className="preparation">
                            <textarea
                                name="preparation"
                                placeholder="Steps of Preparation"
                                value={recipe.preperation}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td id = "New">
                        <button type="submit" className="create-btn">Add New</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
