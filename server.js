const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3001;

app.get("/api/restaurants", async (req, res) => {
  try {
    const targetUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8523973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
