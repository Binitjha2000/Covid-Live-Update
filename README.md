# Covid-Live-Update

Real-Time COVID-19 Case Visualization (JavaScript, Mapbox GL)

This project displays a dynamic map visualizing COVID-19 cases across regions. It utilizes the following key technologies:

JavaScript: The core scripting language responsible for fetching data, manipulating it, and interacting with the map library.
Mapbox GL: A JavaScript library for creating interactive maps. It's used to display geographical data and create markers for each region.
Fetch API: A modern JavaScript API for fetching data from a server (likely serving a JSON file containing real-time case information).
JSON (JavaScript Object Notation): The data format used to store the COVID-19 cases for each region, containing properties like latitude, longitude, infected cases, deaths, etc.
The project retrieves case data through the Fetch API, parses it as JSON, and iterates through each region. For each region, it creates a marker on the map with a color based on the number of cases. Additionally, a popup window displays detailed information like state, country, infected cases, deaths, recovered cases, and currently sick individuals.
