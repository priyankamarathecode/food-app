import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using CORS proxy to avoid CORS error
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8523973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const response = await fetch(proxyUrl + targetUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `HTTP Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log(data); // Handle the data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>{restaurant?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
