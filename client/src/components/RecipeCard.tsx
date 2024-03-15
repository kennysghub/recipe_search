// import React from "react";
// import { Recipe } from "../types";
// import { ImageListItem, ImageListItemBar, Box, Typography } from "@mui/material";

// interface RecipeCardProps {
//   recipe: Recipe;
//   featured: boolean;
// }

// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured }) => {
//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty.toLowerCase()) {
//       case "easy":
//         return "success.main";
//       case "medium":
//         return "warning.main";
//       default:
//         return "text.primary";
//     }
//   };

//   const getTimeColor = (time: number) => {
//     if (time <= 15) {
//       return "success.main";
//     } else if (time <= 30) {
//       return "warning.main";
//     } else {
//       return "error.main";
//     }
//   };

//   return (
//     <ImageListItem
//       cols={featured ? 2 : 1}
//       sx={{
//         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//         borderRadius: 1,
//         overflow: "hidden",
//         m: 1,
//         border: "1px solid forestgreen",
//       }}
//     >
//       <img
//         srcSet={`${recipe.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
//         src={`${recipe.image}?w=248&fit=crop&auto=format`}
//         alt={recipe.name}
//         loading="lazy"
//       />
//       <ImageListItemBar
//         title={
//           <Typography variant="h6" component="div" sx={{ fontWeight: "bold", ml: 2 }}>
//             {recipe.name}
//           </Typography>
//         }
//         subtitle={
//           <Box sx={{ ml: 2, mt: 1 }}>
//             <Typography
//               variant="body1"
//               color={getDifficultyColor(recipe.difficulty)}
//               sx={{ fontWeight: "bold" }}
//             >
//               Difficulty: {recipe.difficulty}
//             </Typography>
//             <Typography
//               variant="body1"
//               color={getTimeColor(recipe.prepTimeMinutes)}
//               sx={{ fontWeight: "bold" }}
//             >
//               Prep Time: {recipe.prepTimeMinutes} mins
//             </Typography>
//             <Typography
//               variant="body1"
//               color={getTimeColor(recipe.cookTimeMinutes)}
//               sx={{ fontWeight: "bold" }}
//             >
//               Cook Time: {recipe.cookTimeMinutes} mins
//             </Typography>
//           </Box>
//         }
//         position="below"
//       />
//     </ImageListItem>
//   );
// };

// export default RecipeCard;
// import React from "react";
// import { Recipe } from "../types";
// import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

// interface RecipeCardProps {
//   recipe: Recipe;
//   featured: boolean;
// }

// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured }) => {
//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty.toLowerCase()) {
//       case "easy":
//         return "success.main";
//       case "medium":
//         return "warning.main";
//       default:
//         return "text.primary";
//     }
//   };

//   const getTimeColor = (time: number) => {
//     if (time <= 15) {
//       return "success.main";
//     } else if (time <= 30) {
//       return "warning.main";
//     } else {
//       return "error.main";
//     }
//   };

//   return (
//     <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
//       <CardMedia
//         component="img"
//         image={`${recipe.image}?w=248&fit=crop&auto=format`}
//         alt={recipe.name}
//         sx={{ width: featured ? 300 : 200 }}
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
//           {recipe.name}
//         </Typography>
//         <Box sx={{ mt: 1 }}>
//           <Typography
//             variant="body1"
//             color={getDifficultyColor(recipe.difficulty)}
//             sx={{ fontWeight: "bold" }}
//           >
//             Difficulty: {recipe.difficulty}
//           </Typography>
//           <Typography
//             variant="body1"
//             color={getTimeColor(recipe.prepTimeMinutes)}
//             sx={{ fontWeight: "bold" }}
//           >
//             Prep Time: {recipe.prepTimeMinutes} mins
//           </Typography>
//           <Typography
//             variant="body1"
//             color={getTimeColor(recipe.cookTimeMinutes)}
//             sx={{ fontWeight: "bold" }}
//           >
//             Cook Time: {recipe.cookTimeMinutes} mins
//           </Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default RecipeCard;
// import React from "react";
// import { Recipe } from "../types";
// import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

// interface RecipeCardProps {
//   recipe: Recipe;
//   featured?: boolean;
// }

// const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty.toLowerCase()) {
//       case "easy":
//         return "success.main";
//       case "medium":
//         return "warning.main";
//       default:
//         return "text.primary";
//     }
//   };

//   const getTimeColor = (time: number) => {
//     if (time <= 15) {
//       return "success.main";
//     } else if (time <= 30) {
//       return "warning.main";
//     } else {
//       return "error.main";
//     }
//   };

//   return (
//     <Card
//       sx={{
//         height: "100%",
//         display: "flex",
//         flexDirection: { xs: "column", sm: featured ? "row" : "column" },
//       }}
//     >
//       <CardMedia
//         component="img"
//         image={`${recipe.image}?w=248&fit=crop&auto=format`}
//         alt={recipe.name}
//         sx={{
//           height: featured ? { xs: 200, sm: "auto" } : 200,
//           flexBasis: featured ? { xs: "100%", sm: "40%" } : "100%",
//           flexShrink: 0,
//         }}
//       />
//       <CardContent sx={{ flexGrow: 1, p: { xs: 1, sm: 2 } }}>
//         <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
//           {recipe.name}
//         </Typography>
//         <Box sx={{ mt: 1 }}>
//           <Typography
//             variant="body1"
//             color={getDifficultyColor(recipe.difficulty)}
//             sx={{ fontWeight: "bold" }}
//           >
//             Difficulty: {recipe.difficulty}
//           </Typography>
//           <Typography
//             variant="body1"
//             color={getTimeColor(recipe.prepTimeMinutes)}
//             sx={{ fontWeight: "bold" }}
//           >
//             Prep Time: {recipe.prepTimeMinutes} mins
//           </Typography>
//           <Typography
//             variant="body1"
//             color={getTimeColor(recipe.cookTimeMinutes)}
//             sx={{ fontWeight: "bold" }}
//           >
//             Cook Time: {recipe.cookTimeMinutes} mins
//           </Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default RecipeCard;
import React from "react";
import { Recipe } from "../types";
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
