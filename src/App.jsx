import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";
import { getProducts } from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // this is the dropdown selector/menu for categoreis
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "sdfdsf",
    "Furniture",
    "newcategory",
    "toys",
    "cloth",
    "slo",
    "kitchen",
    "cat1",
    "cat2",
  ];

  useEffect(() => {
    getProducts()
      .then((data) => {
        // console.log("Search result:", data);
        setItems(data);
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
      })
      .catch((err) => {
        console.error("Failed to fetch items:", err);
      });
  }

  return (
    <div className="main">
      <Header />
      {/* SEARCHBAR */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearchClick}
      />
      {/* DROPDOWN SELECTOR */}
      <div className="category-dropdown-selector">
        <select>
          <option>Fashion</option>
          <option>All</option>
        </select>
      </div>
      {/* Display All Items */}
      <div className="display-all-items">
        {items.map((item) => (
          <ItemCard key={item.item_id} item={item} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
