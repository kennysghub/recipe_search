import axios from "axios";
import { Recipe, SearchParams } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL || "https://dummyjson.com/recipes";

const filterRecipes = (
  recipes: Recipe[],
  { name, difficulty, totalTime }: SearchParams
): Recipe[] => {
  return recipes.filter((recipe) => {
    const totalTimeMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

    /* -------------------------- Filter by recipe name ------------------------- */
    if (name && !recipe.name.toLowerCase().includes(name.toLowerCase())) {
      return false;
    }

    /* ----------------------- Filter by difficulty level ----------------------- */
    if (difficulty && recipe.difficulty !== difficulty) {
      return false;
    }

    /* ----------------------- Filter by total time range ----------------------- */
    if (totalTime) {
      if (totalTime === "less than 15" && totalTimeMinutes >= 15) {
        return false;
      }
      if (totalTime === "15-30" && (totalTimeMinutes < 15 || totalTimeMinutes > 30)) {
        return false;
      }
      if (totalTime === "more than 30" && totalTimeMinutes <= 30) {
        return false;
      }
    }

    return true;
  });
};

export const searchRecipes = async (params: SearchParams): Promise<Recipe[]> => {
  try {
    /* ------------------ Make an API request to fetch recipes ------------------ */
    const apiResponse = await axios.get(API_URL, { params });
    const recipes = apiResponse.data.recipes as Recipe[];

    /* ----------------- Filter recipes based on search criteria ---------------- */
    const filteredRecipes = filterRecipes(recipes, params);

    /* ------------------- Limit the number of results to 8 ------------------- */
    return filteredRecipes.slice(0, 8);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
