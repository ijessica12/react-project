import React from "react"
export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const handleSubmit = (formData) => {
        const newIngredient = formData.get("ingredient")
        if (!newIngredient) return;
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    }
    return (
        <main>
            <form className="ingredient-form" action={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="add ingredients" name="ingredient" />
                <button>+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul>{ingredientItems}</ul>
                <ul className="ingredients-list" aria-live="polite">{ingredientItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}

        </main>
    );
}