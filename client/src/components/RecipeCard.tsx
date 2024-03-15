import React from "react";
import { Recipe } from "../types/types";

/* ----------------------- Material-UI styling imports ---------------------- */
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
  /* -------- Function to determine the color based on difficulty level ------- */
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "success.main";
      case "medium":
        return "warning.main";
      default:
        return "text.primary";
    }
  };
  /* ---------------- Function to determine color based on time. Typically would use custom colors instead. --------------- */
  const getTimeColor = (time: number) => {
    if (time <= 15) {
      return "success.main";
    } else if (time <= 30) {
      return "warning.main";
    } else {
      return "error.main";
    }
  };

  return (
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column", border: "1.5px solid green" }}
    >
      {/* ------------------------- Render the recipe image ------------------------ */}
      <CardMedia
        component="img"
        image={`${recipe.image}?w=248&fit=crop&auto=format`}
        alt={recipe.name}
        sx={{
          height: featured ? 300 : 200,
          flexShrink: 0,
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        {/* ------------------------- Render the recipe name ------------------------- */}
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {recipe.name}
        </Typography>
        <Box sx={{ mt: 1 }}>
          {/* ----------------------- Render the difficulty level ---------------------- */}
          <Typography
            variant="body1"
            color={getDifficultyColor(recipe.difficulty)}
            sx={{ fontWeight: "bold" }}
          >
            Difficulty: {recipe.difficulty}
          </Typography>
          {/* -------------------------- Render the prep time -------------------------- */}
          <Typography
            variant="body1"
            color={getTimeColor(recipe.prepTimeMinutes)}
            sx={{ fontWeight: "bold" }}
          >
            Prep Time: {recipe.prepTimeMinutes} mins
          </Typography>
          {/* -------------------------- Render the cook time -------------------------- */}
          <Typography
            variant="body1"
            color={getTimeColor(recipe.cookTimeMinutes)}
            sx={{ fontWeight: "bold" }}
          >
            Cook Time: {recipe.cookTimeMinutes} mins
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
