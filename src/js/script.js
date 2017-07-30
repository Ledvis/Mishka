var nav = document.querySelector(".main-nav");
var toggle = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".popup");

nav.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function(event) {
	event.preventDefault();
	if (nav.classList.contains("main-nav--closed")) {
		nav.classList.remove("main-nav--closed");
		nav.classList.add("main-nav--opened");
	} else {
		nav.classList.add("main-nav--closed");
		nav.classList.remove("main-nav--opened");
	}
});

var map;

function initMap() {
	// Map options
	var options = {
			zoom: 14,
			center: { lat: 59.938444, lng: 30.323167 }
		}
		// New map
	var map = new google.maps.Map(document.getElementById("map"), options);

	// Listen for click on map
	google.maps.event.addListener(map, "click", function(event) {
		// Add marker
		addMarker({ coords: event.latLng });
	});


	// Add marker
	var marker = new google.maps.Marker({
		position: { lat: 59.938444, lng: 30.323167 },
		map: map,
		icon: "img/icon-map-pin.svg"
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<h1>Lynn MA</h1>"
	});

	marker.addListener("click", function() {
		infoWindow.open(map, marker);
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<h3>HTML Академия</h3>"
	})

	marker.addEventListener("click", function() {
		infoWindow.open(map, marker);
	})
}

var form = document.querySelector(".form__blank");
var email = document.getElementById("email");
var label = document.querySelector(".form__label--email");
var error = document.querySelector(".form__mail-error")

form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (!email.validity.valid) {
		label.classList.add("form__label--error");
		error.innerHTML = "Перепроверьте почту!";
		error.className = "form__mail-error";
	}
	if (email.validity.valid) {
		label.classList.remove("form__label--error");
		error.innerHTML = "";
	}
}, false);
