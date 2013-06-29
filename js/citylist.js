
//var serviceURL = "http://192.168.2.109/rms-services/EmployeeDirectoryJQM/services/";
//var serviceURL = "http://192.168.2.109/rms-services/EmployeeDirectoryJQM/services/";

var citys;
//function onload1(){
//    alert("onload");

$('#index').bind('pageinit', function(event) {
    $.mobile.allowCrossDomainPages = true;
    getCityList();
});
    
//}
//alert(serviceURL + 'restaurants');
function getCityList() {
//    alert("call getCityList");
    $.get(serviceURL + 'city', function(data) {
        $('#cityList li').remove();
        citys = eval('(' + data + ')');
//        alert(citys.length);
                  
        $.each(citys, function(index, city) {                    
            $('#cityList').append('<li  cityName="'+city.city+'" cityId="'+city.id+'"><a href="#">' + city.city +'</li>');            
        });

        $('#cityList li').click(function(){
            //alert($(this).attr("cityId"));
            $('#mypanel').panel("close");
            $('#cityName').html($(this).attr("cityName"));//to replace other html containt
            $("#otherLocation").attr("href","area.html?id="+$(this).attr("cityId"));
            
        });
        
        $('#cityList').listview('refresh');
    });
}

//$('#cityList li').live('click', function() {
//    alert("Works"); // id of clicked li by directly accessing DOMElement property
//});