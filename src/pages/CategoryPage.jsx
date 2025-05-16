import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { getProductsByCategory } from "../utils/api";
import ItemList from "../components/ItemList";
import CategoryDropdown from "../components/CategoryDropdown";

export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(name || "All");

  useEffect(() => {
    getProductsByCategory(selectedCategory).then(setItems).catch(console.error);
  }, [selectedCategory]);
  // this is the dropdown selector/menu for categoreis, automatically mounted by map function
  const categories = [
    "All",
    ...new Set(items.map((item) => item.category_name)),
  ];

  function handleCategoryChange(e) {
    setSelectedCategory(newCat);
    navigate(`/category/${newCat}`);
  }
  return (
    <Box sx={{ mt: 10, mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          textDecoration: "none",
          color: "inherit",
          mb: 4,
        }}
      >
        Category:{selectedCategory}
      </Typography>
      <CategoryDropdown
        categories={categories}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
      <ItemList items={items} />
    </Box>
  );
}
