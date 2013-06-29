var id = getUrlVars()["id"];
//alert(id);
var areas;

$('#area').bind('pageinit', function(event) {
    $.mobile.allowCrossDomainPages = true;
    getAreaCityList();
});

//alert(serviceURL + 'restaurants');
function getAreaCityList() {
    $.getJSON(serviceURL + 'area/'+id, function(data) {
        $('#areaCityList li').remove();
        areas = data;
                  
        $.each(areas, function(index, area) {                    
            $('#areaCityList').append('<li areaId="'+area.id+'"  areaName="'+area.area+'" ><a href="restaurantlist.html?findby=location&areaId='+area.id+'" id="areaList" data-ajax="false">' + area.area +'</li>');
            
        });
        $('#areaCityList').listview('refresh');
    });
}

//$('#cityList li').live('click', function() {
//    alert("Works"); // id of clicked li by directly accessing DOMElement property
//});


