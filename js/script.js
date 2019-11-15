function initMap()
{

  var iit = {
    lat: 41.8349,
    lng: -87.6270
  };
  var map = new google.maps.Map(document.getElementById('map'),
  {
    center:
    {
      lat: 41.8349,
      lng: -87.6270
    },
    zoom: 10,
    styles: [
    {
      elementType: 'geometry',
      stylers: [
      {
        color: '#242f3e'
      }]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
      {
        color: '#242f3e'
      }]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
      {
        color: '#746855'
      }]
    },
  