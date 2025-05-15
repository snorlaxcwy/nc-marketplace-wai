import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchClick() {
    getItems(searchTerm)
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.error("Failed to fetch items:", err);
      });
  }
  return (
    <div>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearchClick}
      />
      <Footer />
    </div>
  );
}

export default App;
