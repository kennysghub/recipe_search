# Recipe Search Application
This is a client-side recipe search application that allows users to search for recipes by name, difficulty, and total time to make. The application consumes an external API endpoint [(dummyjson.com/recipes)](https://dummyjson.com/recipes) to fetch recipe data and displays the search results in a grid layout.

## Features
- Search recipes by name, difficulty, and total time to make
- Display search results in a grid layout with a featured recipe taking up more space
-Limit the number of search results to 8
- Mobile-friendly responsive design

## Getting Started
Prerequisites
- Node.js (version X.X.X)
- npm (version X.X.X) or Yarn (version X.X.X)
Installation
Clone the repository:
```
git clone https://github.com/your-username/recipe-search.git
```
Navigate to client directory

```
cd client/
```
Install the dependencies:
```
npm install
```

## Running the Application
Start the development server:
```
npm run dev
```
Open your browser and visit http://localhost:3000 to view the application.

## Usage
1. Enter a recipe name, select a difficulty level, and/or choose a total time range in the search form.
2. Click the "Search" button to submit the search query.
3. The search results will be displayed in a grid layout below the search form.
4. The first item in the search results is considered the "Featured Recipe" and takes up more space than the other results.
5. If no results are found, a message will be displayed indicating that no results were found.

### Accessibility Considerations
To make the search page more accessible, the following approaches can be considered:

- Use semantic HTML elements to provide meaningful structure to the page.
- Include proper headings and landmarks to facilitate navigation for screen reader users.
- Ensure that all form elements have associated labels and are properly grouped.
- Provide alternative text for images to describe their content.
- Use sufficient color contrast for text and interactive elements.
- Make sure the page is keyboard-accessible and follows a logical tab order.
- Provide clear and concise instructions and feedback to users.

### Mobile Responsiveness
The application is designed to be mobile-friendly and responsive. The grid layout adjusts based on the screen size, ensuring that the search results are displayed optimally on various devices. The search form and cards are also styled to provide a good user experience on smaller screens.

### URL Parameters
In this implementation, the search parameters are not passed through the URL. However, to handle URL parameters, the following approach can be considered:

1. Parse the URL parameters using a library like query-string or manually using JavaScript's URLSearchParams API.
2. Extract the search parameters from the URL and update the corresponding form fields and search state.
3. Trigger the search functionality with the extracted parameters to display the initial search results.
4. Update the URL parameters whenever the search form is submitted to reflect the current search criteria.
5. This approach allows for sharing and bookmarking search results by copying the URL with the search parameters included.

### Tech Stack
- The application is built using React and TypeScript.
- The styling is implemented using Material-UI components and custom CSS.

### Project Structure

- `client/`: The main source code directory of the application.  
  - `components/`: Contains reusable React components used in the application.
    - `RecipeCard.tsx`: Represents a single recipe card in the search results.
    - `SearchForm.tsx`: Provides the search form functionality for recipes.
  - `pages/`: Contains the main pages or views of the application.
    - `HomePage.tsx`: The main page component that displays the search form and recipe results.
  - `services/`: Contains services or utility functions used in the application.
    - `api.ts`: Handles API requests to fetch recipe data from the external endpoint.
  - `types/`: Contains type definitions.
    - `index.ts`: Exports custom types used in the application, such as **Recipe** and **SearchParams**.