import axios from "axios";
import Category from "../pages/CategoryPage";

const NCMarketplaceAPI = axios.create({
  baseURL: "https://nc-marketplace-2-g51j.onrender.com/api",
});

// Listing All items
export const getProducts = (searchTerm = "") => {
  return NCMarketplaceAPI.get(`/items`, { params: { name: searchTerm } }).then(
    (response) => {
      const items = response.data.items;
      if (!searchTerm.trim()) {
        return items;
      }

      return items.filter((item) =>
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  );
};

// Listing items
export const getProductsByCategory = (categoryName = "") => {
  return NCMarketplaceAPI.get(`/items`, {
    params: { Category: categoryName },
  }).then((res) => res.data.items);
};

export default getProducts;

// import axios from "axios";

// const NCMarketplaceAPI = axios.create({
//   baseURL: "https://nc-marketplace-2-g51j.onrender.com/api",
// });

// export const getProducts = (searchTerm = "") => {
//   return NCMarketplaceAPI.get(`/items`, {
//     params: { name: searchTerm },
//   }).then((response) => {
//     return response.data.items;

//   }
// );
// };

// export default getProducts;
