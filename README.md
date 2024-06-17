<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>Real-Time COVID-19 Case Visualization</h1>
  <p>This project displays a dynamic map visualizing COVID-19 cases across regions. It utilizes several key technologies:</p>
  <ul>
    <li><strong>JavaScript:</strong> The core scripting language for fetching data, manipulation, and interacting with the map library.</li>
    <li><strong>Mapbox GL:</strong> A JavaScript library used to create interactive maps, displaying geographical data and markers for each region.</li>
    <li><strong>Fetch API:</strong> A modern JavaScript API for fetching data from a server (likely serving a JSON file with real-time case information).</li>
    <li><strong>JSON (JavaScript Object Notation):</strong> The data format used to store COVID-19 cases, containing properties like latitude, longitude, infected cases, deaths, etc.</li>
  </ul>
  <p>The project retrieves case data through the Fetch API, parses it as JSON, and iterates through each region. For each region, it creates a marker on the map with a color based on the number of cases. Additionally, a popup window displays detailed information like state, country, infected cases, deaths, recovered cases, and currently sick individuals.</p>
</body>
</html>
