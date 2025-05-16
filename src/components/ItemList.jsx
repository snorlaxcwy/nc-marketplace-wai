import ItemCard from "./ItemCard";
import { Grid } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

function ItemList({ items }) {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
      {items.map((item) => (
        <ItemCard key={item.item_id} item={item} />
      ))}
    </Masonry>
  );
}

export default ItemList;
