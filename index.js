// Initialize and add the map
function initMap() {
    // The location of Uluru
    const hyderabad = { lat: 17.3850, lng: 78.4867 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: hyderabad,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: hyderabad,
      map: map,
    });
  }
  
  window.initMap = initMap;