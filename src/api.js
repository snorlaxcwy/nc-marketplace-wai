import axios from "axios";

const NCMarketplaceAPI = axios.create({
  baseURL: "https://nc-marketplace-2-g51j.onrender.com/api",
});

export const getProducts = (searchTerm = "") => {
  return NCMarketplaceAPI.get(`/items`, {
    params: { name: searchTerm },
  }).then((response) => {
    return response.data.items;
  });
};

export default getProducts;
