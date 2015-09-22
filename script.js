var map = L.map('map-container');
map.setView([44.971724, -93.243239], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
var polygon = $.getJSON('https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson', function(data){
	var geojson = new L.geoJson(data).addTo(map);
});
$(".red.box").click(function(e){
  window.alert("Don't touch my div, you bastard!");
});
var my_time = new Date();
$(".button").click(function(e){
  window.alert(["What did you expect? Serious originality?", my_time]);
});
