function updateMap() {
    console.log("Updating map with realtime data");
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                deaths = element.dead;
                state = element.name;
                country = element.country;
                recovered = element.recovered;
                sick = element.sick;
                
                // Calculate the color based on cases
                let color;
                if (cases > 1000) {
                    color = "rgb(255, 0, 0)";
                } else if (cases > 255 && cases < 1000) {
                    color = `rgb(${cases}, 0, 0)`;
                } else {
                    color = `rgb(${cases}, ${cases}, 0)`;
                }

                // Create a marker with a popup
                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                .setLngLat([longitude, latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${state}, ${country}</h3><p>Infected: ${cases}</p><p>Deaths: ${deaths}</p><p>Recovered: ${recovered}</p><p>sick: ${sick}</p>`))
                .addTo(map); 
            });
        })
}

//If you have data getting update then you can refrsh the site every 2 hour 
// let interval = 20000;
// setInterval(updateMap, interval); 

updateMap();
