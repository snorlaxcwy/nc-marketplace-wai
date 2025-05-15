import axios from "axios";

const NCMarketplaceAPI = axios.create({
    baseURL: "https://nc-marketplace-2-g51j.onrender.com/"
})


export const getProducts = (searchResult) => {
    return dnd5eApi
    .get(`/spells/${searchResult}`)
    .then((response) => {
        return response.data;
    })
};


similar to the abobe and install axios
