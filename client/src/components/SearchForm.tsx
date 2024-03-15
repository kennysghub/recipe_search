import React from "react";
import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const difficulties = ["Easy", "Medium"];
const totalTimes = ["less than 15", "15-30", "more than 30"];

interface SearchFormProps {
  onSearch: (name: string, difficulty: string, totalTime: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [name, setName] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const [totalTime, setTotalTime] = React.useState("");

  const handleDifficultyChange = (event: SelectChangeEvent<string>) => {
    setDifficulty(event.target.value as string);
  };

  const handleTotalTimeChange = (event: SelectChangeEvent<string>) => {
    setTotalTime(event.target.value as string);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(name, difficulty, totalTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={2}>
        <TextField
          color="primary"
          id="outlined-helperText"
          label="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ mb: { xs: 2, sm: 1 } }}
        />
        <FormControl sx={{ minWidth: 120, mb: { xs: 2, sm: 0 } }}>
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            id="difficulty-select"
            value={difficulty}
            onChange={handleDifficultyChange}
            label="Difficulty"
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            {difficulties.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120, mb: { xs: 2, sm: 0 } }}>
          <InputLabel id="total-time-label">Total Time</InputLabel>
          <Select
            labelId="total-time-label"
            id="total-time-select"
            value={totalTime}
            onChange={handleTotalTimeChange}
            label="Total Time"
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            {totalTimes.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          size="small"
          color="primary"
          variant="contained"
          type="submit"
          sx={{ mb: 0.5, mr: 0.5 }}
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

export default SearchForm;
