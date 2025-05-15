function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.img_url} alt={item.item_name} className="item-image" />
      <h3>{item.item_name}</h3>
      <p>{item.description}</p>
      <p>£{item.price}</p>
      <p>{item.category_name}</p>
      <p>Seller: {item.seller_name}</p>
    </div>
  );
}
export default ItemCard;
