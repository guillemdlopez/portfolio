const initMap = function () {
  const coords = [2.1804, 41.58946];

  mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpbGxlbWRsb3BleiIsImEiOiJja2VtazFndXUwdTc4MnNwdzk5cnduZTNuIn0.xkKcNerIczfeJNf3Lq9Wfw';

  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: coords,
  zoom: 12,
  dragPan: true
  });

  const marker = new mapboxgl.Marker({
    color: "#5F38CC",
  })
  .setLngLat(coords)
  .setPopup(new mapboxgl.Popup().setHTML('<p> You found it! 🎉</p>'))
  .addTo(map);
};

export { initMap }
