var container = document.querySelector('.map');
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};
var imageSrc = '/src/image/burger-king-logo-GPS-Pin.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(69, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)};
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude, 
            lon = position.coords.longitude; 
        var locPosition = new kakao.maps.LatLng(lat, lon); 
        displayMarker(locPosition);
        map.setCenter(locPosition);    
      });
} else {
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    displayMarker(locPosition);
}

var map = new kakao.maps.Map(container, options);
var ps = new kakao.maps.services.Places(); 
ps.keywordSearch('버거킹', placesSearchCB);
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    } 
}

function displayMarker(place) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}    