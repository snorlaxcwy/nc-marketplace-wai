import { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

function SellForm({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    item_name: "",
    category: "",
    img_url: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Selling Item:", formData);
    setCurrentPage("home");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2, // space between inputs
        }}
      >
        <Typography variant="h5" gutterBottom>
          Give your stuff a second life!
        </Typography>

        <TextField
          label="Item Name"
          name="item_name"
          value={formData.item_name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Image URL"
          name="img_url"
          value={formData.img_url}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          label="Price (£)"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          fullWidth
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
        />

        <Button type="submit" variant="contained" size="large">
          SELL IT NOW!
        </Button>
      </Box>
    </Container>
  );
}

export default SellForm;
