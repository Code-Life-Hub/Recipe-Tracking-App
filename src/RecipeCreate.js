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
                    <tr>
                        <td>
                            <input
                                name="name"
                                placeholder="Name"
                                value={recipe.name}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="cuisine"
                                placeholder="Cuisine"
                                value={recipe.cuisine}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                type="url"
                                name="photo"
                                placeholder="URL"
                                value={recipe.photo}
                                required
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <textarea
                                name="ingredients"
                                placeholder="Ingredients"
                                value={recipe.ingredients}
                                required={true}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <textarea
                                name="preparation"
                                placeholder="Preparation"
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
