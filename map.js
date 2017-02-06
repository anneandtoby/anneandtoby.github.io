function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.7271606, lng: -122.206437},
    zoom: 10,
    mapTypeControl: false,
    streetViewControl: false
  });

  var marker = new google.maps.Marker({
    map: map,
    title: 'DeLille Cellars Chateau',
    icon: 'rings.svg',
    place: {
      placeId: 'ChIJUUyqGK0NkFQRQfHkb-KCQh4',
      location: {lat: 47.727740, lng: -122.136538}
    }
  });

  map.setOptions({
    styles: [
      {
        elementType: 'geometry',
        stylers: [{color: '#d1de8b'}]
      },
      {
        elementType: 'labels.icon',
        stylers: [{visibility: 'off'}]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{color: '#f5f5f5'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#bdbdbd'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#eeeeee'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#e5e5e5'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{color: '#757575'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#dadada'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#616161'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#e5e5e5'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#eeeeee'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#c9c9c9'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9e9e9e'}]
      }
    ]
  });
}

function init() {
  var codeInput = document.querySelector('#rsvp-code input');
  codeInput.addEventListener('keydown', function(e) {
    if (e.key != 'Enter') {
      return;
    }

    var code = codeInput.value.toLowerCase();
    var errorMsg = document.getElementById('rsvp-error');
    if (code != 'galileo') {
      errorMsg.style.display = 'block';
      return;
    }

    var codeForm = document.getElementById('rsvp-code');
    var rsvpForm = document.getElementById('rsvp-form');
    codeForm.style.display = 'none';
    rsvpForm.style.display = 'inline';
  });
}

document.addEventListener('DOMContentLoaded', init);
