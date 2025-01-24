
		
	
		document.addEventListener('DOMContentLoaded', function() {
  			window.yakarta();
		});
	  // Функция инициализации карты
      function yakarta() {

		var mapStyles = [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "poi.business",
          elementType: "geometry",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{ visibility: "off" }]
        }
      ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: { lat: 51.898833, lng: -8.471555 },
		  styles: mapStyles
        });
		
		directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);


        // Массив с данными об отелях
        var hotels = [
          {
            position: { lat: 51.8910, lng: -8.4896},
            title: "Hayfield Manor Hotel",
            info: "Perrott Ave, College Rd, Centre, Cork, T12 HT97",
			phone: "+353214845900"
          },
          {
            position: { lat: 51.894320, lng: -8.4977 },
            title: "Acton Lodge B&B",
            info: "Western Rd, Mardyke, Cork",
			phone: "+353214344161"
          },
          {
            position: { lat: 51.895218, lng: -8.494606},
            title: "Redclyffe Bed and Breakfast",
            info: "Redclyffe, Western Rd, 3, Mardyke, Cork, 4",
			phone: "+353214273220"
          },
		  {
            position: { lat: 51.895221, lng: -8.491992 },
            title: "Crawford House - ScholarLee Living Apartments",
            info: "Western Rd, Mardyke, Cork",
			phone: "+353214279000"
          },
		  {
            position: { lat: 51.895371,  lng: -8.488728 },
            title: "Shandon Bells Guest House",
            info: "University Place, 5 Western Rd, Mardyke, Cork, T12 RC63",
			phone: "+353860220280"
          },
		  {
            position: { lat: 51.897094,lng: -8.470072 },
            title: "The Imperial Hotel & SPA",
            info: "76 S Mall, Street, Cork, T12 A2YT",
			phone: "+353214274040"
          },
		  {
            position: { lat: 51.901434, lng: -8.488728 },
            title: "Residence Inn Cork",
            info: "Camden Pl, Camden Quay, Victorian Quarter, Cork, T23 C2RR",
			phone: "+353212037844"
          },
		  {
            position: { lat: 51.901507, lng: -8.468170 },
            title: "Hotel Isaacs Cork",
            info: "48 MacCurtain Street, Centre, Cork, T23 F6EK",
			phone: "+353214500011"
          },
		  {
            position: { lat: 51.901397, lng: -8.460189 },
            title: "The Dean",
            info: "Horgan's Quay, Railway St, Northern Quarter, Cork",
			phone: "+353212341200"
          },
		  {
            position: { lat: 51.902638, lng: -8.474404 },
            title: "Maldron Hotel Shandon Cork City",
            info: "11 John Redmond St, Shandon, Cork, T23 A9TF",
			phone: "+353214529200"
          },
		  {
            position: { lat: 51.901406, lng: -8.467580 },
            title: "The Metropole Hotel",
            info: "MacCurtain Street, Victorian Quarter, Cork, T23 PX44",
			phone: "+353214643700"
          },
		  {
            position: { lat: 51.899569, lng: -8.464089 },
            title: "Leonardo Hotel Cork",
            info: "Anderson's Quay, Munster, Cork, T12 DCR9",
			phone: "+353214943000"
          },

		  {
            position: { lat: 51.894211, lng: -8.429527 },
            title: "Blackrock Carole Ville Bed & Breakfast",
            info: "36 Beaumont Dr, Ballintemple, Cork, T12 EE03",
			phone: "+353872492477"
          },
		  {
            position: { lat: 51.901232, lng: -8.470701 },
            title: "Moxy Cork",
            info: "Camden Quay, Shandon, Cork, T23 C2RR",
			phone: "+353212037833"
          },
		  {
            position: { lat: 51.898745, lng: -8.464516 },
            title: "Clayton Hotel Cork City",
            info: "10 Lapp's Quay, Centre, Cork, T12 RD6E",
			phone: "+353214224900"
          },
		  {
            position: { lat: 51.902809, lng: -8.466695 },
            title: "Sheila's Hostel",
            info: "4 Ascaill Belgrave, Wellington Rd, Victorian Quarter, Corcaigh, T23 XF95",
			phone: "+353214505562"
          },
		  {
            position: { lat: 51.901456, lng: -8.465192 },
            title: "Brú Hostel",
            info: "57 MacCurtain Street, Centre - North, Victorian Quarter, Cork, T23 CD00",
			phone: "+353214559667"
          },
          
        ];

        var infoWindow = new google.maps.InfoWindow();

        hotels.forEach(function(hotel) {
          var marker = new google.maps.Marker({
            position: hotel.position,
            map: map,
            title: hotel.title,
			phone: "+353214943000"
          });

          marker.addListener('click', function() {
            infoWindow.setContent('<h3>' + hotel.title + '</h3><p>' + hotel.info + '</p><p>' + hotel.phone + '</p>');
            infoWindow.open(map, marker);
			
			parent.c3_callFunction("OnMarkerClicked", [hotel.position.lat, hotel.position.lng, hotel.phone]);
          });

		
		google.maps.event.addListener(infoWindow, 'closeclick', function() {
			parent.c3_callFunction("OnMarkerClose", ["param1", "param2"]);
			yakarta();
			});
        });
		

      }
	  
		function clearRoute() {
		  if (directionsRenderer) {
		    directionsRenderer.set('directions', null); // Очищает маршрут
			yakarta();
		  }
		}
	  
	function plotRouteFromConstruct(currentLat, currentLng, TargetPositionLat, TargetPositionLng) {
    // Проверяем, что преобразование прошло успешно
   /* if (isNaN(lat) || isNaN(lng)) {
		console.log(typeof lat);
		console.log(typeof lng);
        alert('Некорректные координаты.');
        return;
    }*/
		//console.log(currentLat);
		//console.log(currentLng);
		//console.log(TargetPosition);
		var origin = new google.maps.LatLng((Math.trunc(currentLat * 10000)/10000), (Math.trunc(currentLng * 10000)/10000));
		var destination = new google.maps.LatLng(TargetPositionLat, TargetPositionLng);

        var request = {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(result, status) {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            alert('Не удалось проложить маршрут: ' + status);
          }
        });
		}








