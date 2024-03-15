import React from "react";

import SearchForm from "../components/SearchForm";
import RecipeCard from "../components/RecipeCard";

import { searchRecipes } from "../services/api";

import { Recipe } from "../types/types";

/* ----------------------- Material-UI stying imports ----------------------- */
import { Grid } from "@mui/material";

const HomePage: React.FC = () => {
  /* ---------------- Recipes and search status stored in state --------------- */
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [searchPerformed, setSearchPerformed] = React.useState(false);

  /* -------------- Search for recipes based on provided criteria ------------- */
  const handleSearch = async (name: string, difficulty: string, totalTime: string) => {
    const results = await searchRecipes({ name, difficulty, totalTime });

    /* ----------- Update recipes state and set search status to true ----------- */
    setRecipes(results);
    setSearchPerformed(true);
  };

  return (
    <div className="home-page">
      <h1>Recipe Search</h1>
      <SearchForm onSearch={handleSearch} />
      <Grid container spacing={2}>
        {recipes.length ? (
          <>
            {/* ----------------------- Render the featured recipe ----------------------- */}
            {recipes.slice(0, 1).map((recipe) => (
              <Grid item xs={12} md={8} key={recipe.id}>
                <RecipeCard recipe={recipe} featured />
              </Grid>
            ))}
            {/* ------------------------ Render the second recipe ------------------------ */}
            {recipes.slice(1, 2).map((recipe) => (
              <Grid item xs={12} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} featured={false} />
              </Grid>
            ))}
            {/* ---------------------- Render the remaining recipes ---------------------- */}
            {recipes.slice(2).map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} featured={false} />
              </Grid>
            ))}
          </>
        ) : (
          /* -- Render "No Results" message if search performed and no recipes found -- */
          searchPerformed && (
            <Grid item xs={12}>
              <p>No Results - try searching for a different recipe!</p>
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
