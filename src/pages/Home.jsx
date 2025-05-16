// Call API and pass to ItemList

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ItemCard from "../components/ItemCard";
import { getProducts } from "../utils/api";
import SellForm from "../components/SellForm";
import {
  Container,
  Grid,
  Box,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ItemList from "../components/ItemList";
import CategoryDropdown from "../components/CategoryDropdown";

export default function Home() {
  // all items
  const [items, setItems] = useState([]);
  // search bar to remember the search keywords
  const [searchTerm, setSearchTerm] = useState("");
  //  remeber the selected categories
  const [selectedCategory, setSelectedCategory] = useState("All");
  // remember the items of selected categories
  const [filteredItems, setfilteredItems] = useState([]);

  // this is the dropdown selector/menu for categoreis, automatically mounted by map function
  const categories = [
    "All",
    ...new Set(items.map((item) => item.category_name)),
  ];

  // add button status
  // const [currentPage, setCurrentPage] = useState("home");

  // deal witht the data
  useEffect(() => {
    getProducts()
      .then((data) => {
        // console.log("Search result:", data);
        setItems(data); // save all the items
        setSelectedCategory(categories); // display filtered category items
      })
      .catch((err) => {
        console.error("Failed to fetch items", err);
      });
  }, []); //<-- [] to aovid repeated call

  function handleSearchClick() {
    if (!searchTerm.trim()) return; // <- to avoid repeated empty search: 429 Too Many Requests
    getProducts(searchTerm)
      .then((data) => {
        setItems(data);
        setfilteredItems(data);
        setSelectedCategory("All");
      })
      .catch((err) => {
        console.error("Failed to fetch items:", err);
      });
  }

  const categoryFilteredItems = filteredItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category_name === selectedCategory;
  });
  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Time to TREASURE HUNT!
      </Typography>
      <CategoryDropdown categories={categories} value="All" />
      <ItemList items={items} />
    </Container>
  );
  //   return (
  //     // <div className="main">
  //     <Container maxWidth="lg">
  //       <Header setCurrentPage={setCurrentPage} />
  //       {/* SEARCHBAR */}
  //       {currentPage === "home" && (
  //         <>
  //           <Box my={4}>
  //             <SearchBar
  //               searchTerm={searchTerm}
  //               setSearchTerm={setSearchTerm}
  //               onSearch={handleSearchClick}
  //             />
  //           </Box>
  //           {/* CATEGORY DROPDOWN SELECTOR */}

  //           {/* <div className="category-dropdown-selector"> */}

  //           <Box mb={4}>
  //             <label>CATEGORY: </label>
  //             <Select
  //               value={selectedCategory}
  //               onChange={(e) => setSelectedCategory(e.target.value)}
  //             >
  //               // mapping the categories from above
  //               {categories.map((category) => (
  //                 <MenuItem key={category} value={category}>
  //                   {category}
  //                 </MenuItem>
  //               ))}
  //             </Select>
  //           </Box>
  //           {/* </div> */}
  //           {/* Display All Items */}
  //           {/* <div className="display-all-items"> */}
  //           <Masonry columns={3} spacing={2}>
  //             {categoryFilteredItems.map((item) => (
  //               <ItemCard key={item.item_id} item={item} />
  //             ))}
  //           </Masonry>
  //         </>
  //       )}
  //       {currentPage === "sell" && <SellForm setCurrentPage={setCurrentPage} />}
  //       <Footer />
  //       {/* </div> */}
  //     </Container>
  //   );
}
