import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/restaurants");
        if (!response.ok) {
          throw new Error(
            `HTTP Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setRestaurants(data?.data?.cards ?? []); // Adjust the data path as needed
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
