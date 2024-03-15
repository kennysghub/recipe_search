import React from "react";
import { searchRecipes } from "../services/api";
import SearchForm from "../components/SearchForm";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types/types";
import { Grid } from "@mui/material";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [searchPerformed, setSearchPerformed] = React.useState(false);

  const handleSearch = async (name: string, difficulty: string, totalTime: string) => {
    const results = await searchRecipes({ name, difficulty, totalTime });
    console.log("RESULTS: ", results);
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
            {recipes.slice(0, 1).map((recipe) => (
              <Grid item xs={12} md={8} key={recipe.id}>
                <RecipeCard recipe={recipe} featured />
              </Grid>
            ))}
            {recipes.slice(1, 2).map((recipe) => (
              <Grid item xs={12} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} featured={false} />
              </Grid>
            ))}
            {recipes.slice(2).map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <RecipeCard recipe={recipe} featured={false} />
              </Grid>
            ))}
          </>
        ) : (
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
