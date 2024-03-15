import React from "react";
import { Recipe } from "../types/types";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
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
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {recipe.name}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography
            variant="body1"
            color={getDifficultyColor(recipe.difficulty)}
            sx={{ fontWeight: "bold" }}
          >
            Difficulty: {recipe.difficulty}
          </Typography>
          <Typography
            variant="body1"
            color={getTimeColor(recipe.prepTimeMinutes)}
            sx={{ fontWeight: "bold" }}
          >
            Prep Time: {recipe.prepTimeMinutes} mins
          </Typography>
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
