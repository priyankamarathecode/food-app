import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import "../restuarants.css";
import RestaurantCategroy from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "Dummy data";

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="res-div">
      <div className="restaurant-info">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt={name}
          className="restaurant-image"
        />
        <div className="restaurant-details">
          <h1>{name} </h1>
          <br />
          <h1>
            {cuisines.join(", ")} - {costForTwoMessage}
          </h1>
        </div>
      </div>
      {/* categories accordians */}
      {categories.map((category, index) => (
        <RestaurantCategroy
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
