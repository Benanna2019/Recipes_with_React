import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((ing) => ing.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit-remove-button-container">
        <button className="btn recipe-edit-remove-button">&times;</button>
      </div>
      <div className="recipe-edit-details-grid">
        <label htmlFor="name" className="recipe-edit-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onInput={(e) => handleChange({ name: e.target.value })}
          className="recipe-edit-input"
        />
        <label htmlFor="cookTime" className="recipe-edit-label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onInput={(e) => handleChange({ cookTime: e.target.value })}
          className="recipe-edit-input"
        />
        <label htmlFor="servings" className="recipe-edit-label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onInput={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
          className="recipe-edit-input"
        />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          className="recipe-edit-input"
          onInput={(e) => handleChange({ instructions: e.target.value })}
          value={recipe.instructions}
          id="instructions"
        />
      </div>
      <br />
      <label className="recipe-edit-label">Ingredients</label>
      <div className="recipe-edit-ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
          />
        ))}
      </div>
      <div className="recipe-edit-add-ingredient-btn-container">
        <button className="btn btn-primary">Add Ingredient</button>
      </div>
    </div>
  );
}
