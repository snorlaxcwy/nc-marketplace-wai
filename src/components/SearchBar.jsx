// import { getProducts } from "../../";

function SearchBar({ searchTerm, handleChange, setProductToFocus }) {
  function handleClick(event) {
    event.preventDefault();
    onSearch();
    // return getProducts(searchTerm)
    // .then((data) => {
    //     setProductToFocus(data)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
  }

  return (
    <div>
      <form className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleClick} className="search-button"></button>
      </form>
    </div>
  );
}
export default SearchBar;
