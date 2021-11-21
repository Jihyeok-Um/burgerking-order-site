const container = document.querySelector('.map');
const infowindow = new kakao.maps.InfoWindow({zIndex:1});
const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};
const imageSrc = '/src/image/burger-king-logo-GPS-Pin.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(69, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)};
const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude, 
            lon = position.coords.longitude; 
        const locPosition = new kakao.maps.LatLng(lat, lon); 
        displayMarker(locPosition);
        map.setCenter(locPosition);    
      });
} else {
    const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    displayMarker(locPosition);
}

const map = new kakao.maps.Map(container, options);
const ps = new kakao.maps.services.Places(); 
ps.keywordSearch('버거킹', placesSearchCB);

function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       
    } 
}

function displayMarker(place) {
    const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage 
    });
    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}    