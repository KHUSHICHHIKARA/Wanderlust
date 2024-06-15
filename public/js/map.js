 mapboxgl.accessToken = "pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ";
// console.log(process.env.MAP_TOKEN)
const map = new mapboxgl.Map({
    container: 'map', 
    style: "mapbox://styles/mapbox/streets-v12", 
    center: listing.geometry.coordinates, 
    zoom: 9 
});

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.title}</h4> <p>Exact location will be provided after booking!</p>`)

    )
    .addTo(map);
    console.log(map)

 console.log(mapToken);
