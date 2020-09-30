import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on Chicken \n2. Put Chicken in Oven \n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbsp",
      },
    ],
  },
  {
    id: 1,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on Pork \n2. Put Pork in Oven \n3. Eat Pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbsp",
      },
    ],
  },
];

export default App;
