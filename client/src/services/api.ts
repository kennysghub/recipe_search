// import axios from "axios";
// import { Recipe, SearchParams } from "../types";

// const API_URL = "https://dummyjson.com/recipes";

// export const searchRecipes = async (params: SearchParams): Promise<Recipe[]> => {
//   try {
//     const response = await axios.get(API_URL, { params });
//     const recipes = response.data.recipes as Recipe[];

//     // Filter recipes based on search criteria
//     const filteredRecipes = recipes.filter((recipe) => {
//       const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

//       if (params.name && !recipe.name.toLowerCase().includes(params.name.toLowerCase())) {
//         return false;
//       }

//       if (params.difficulty && recipe.difficulty !== params.difficulty) {
//         return false;
//       }

//       if (params.totalTime) {
//         if (params.totalTime === "less than 15" && totalTime >= 15) {
//           return false;
//         }
//         if (params.totalTime === "15-30" && (totalTime < 15 || totalTime > 30)) {
//           return false;
//         }
//         if (params.totalTime === "more than 30" && totalTime <= 30) {
//           return false;
//         }
//       }

//       return true;
//     });

//     // Limit the number of results to 8
//     return filteredRecipes.slice(0, 8);
//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//     return [];
//   }
// };
import axios from "axios";
import { Recipe, SearchParams } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "https://dummyjson.com/recipes";

const filterRecipes = (
  recipes: Recipe[],
  { name, difficulty, totalTime }: SearchParams
): Recipe[] => {
  return recipes.filter((recipe) => {
    const totalTimeMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

    if (name && !recipe.name.toLowerCase().includes(name.toLowerCase())) {
      return false;
    }

    if (difficulty && recipe.difficulty !== difficulty) {
      return false;
    }

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
    const apiResponse = await axios.get(API_URL, { params });
    const recipes = apiResponse.data.recipes as Recipe[];

    const filteredRecipes = filterRecipes(recipes, params);

    // Limit the number of results to 8
    return filteredRecipes.slice(0, 8);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
