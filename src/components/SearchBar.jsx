import { TextField, Button, Box } from "@mui/material";

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      flexWrap="wrap"
    >
      <TextField
        variant="outlined"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleChange}
        sx={{ minWidth: "250px" }}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
