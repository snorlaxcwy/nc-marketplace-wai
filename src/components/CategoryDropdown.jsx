import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import { useNavigate } from "react-router-dom";

export default function CategoryDropdown({ categories = [], value, onChange }) {
  //   const nav = useNavigate();
  return (
    <FormControl sx={{ minWidth: 200, mb: 4 }}>
      <InputLabel sx={{ mb: 2 }}>Explore by Categories:</InputLabel>
      <Select
        value={value}
        label="Explore by Categories"
        onChange={onChange}
        sx={{ mt: 1 }}
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
