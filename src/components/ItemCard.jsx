import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function ItemCard({ item }) {
  const safeImg = item.img_url?.startsWith("http")
    ? item.img_url
    : "https://images.unsplash.com/photo-1545249390-6bdfa286032f?fit=crop&w=600&h=600&q=80a.placeholder.com/300x200?text=No+Image";
  return (
    <Card sx={{ Width: 300 }}>
      <CardMedia
        component="div"
        sx={{
          width: "100%",
          height: 0,
          paddingTop: "56.25%", // 16:9
          backgroundImage: `url(${safeImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.item_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          £{(item.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="caption" display="block">
          Category: {item.category_name}
        </Typography>
        <Typography variant="caption" display="block">
          Seller: {item.seller_name}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default ItemCard;
