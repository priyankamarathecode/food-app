import { useState } from "react";
import "../assets/css/restaurantcategroy.css";
import ItemList from "./ItemList";

const RestaurantCategroy = ({ data, dummy }) => {
  const [showItems, setShowItems] = useState(true);
  const itemCount = data.itemCards?.length || 0;

  const handleClick = () => {
    setShowItems((prevState) => !prevState);
  };

  return (
    <div className="category-card">
      <div className="category-header" onClick={handleClick}>
        <span>
          {data.title} ({itemCount})
        </span>
        <span className="toggle-icon">{showItems ? "▲" : "▼"}</span>
      </div>
      <br />
      {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    </div>
  );
};

export default RestaurantCategroy;
