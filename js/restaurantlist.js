var url = serviceURL + "restaurants";
//var findBy = getUrlVars()["findby"];
//    alert(findBy);
//            var areaId = getUrlVars()["areaId"];
//            alert(areaId);
//alert(window.location.href);

var restaurnts;

$('#restaurants').bind('pageinit', function(event) {
   
    //    if(findBy == "location"){
    //            url = url + "?findby="+findBy+"&areaId="+areaId
    //    }
    //    
    //     
    var querystring = location.search.replace( '?', '' );
    //  alert(querystring);      
    url = url + "?"+querystring;
    //    alert(url);
    getRestaurantList();
});

//alert(serviceURL + 'restaurants');

function getRestaurantList() {
 
        
    $.getJSON(url, function(data) {
        $('#restaurantList li').remove();
        restaurnts = data;
                  
        $.each(restaurnts, function(index, restaurant) {                    
            $('#restaurantList').append('<li><a href="restaurantsdetails.html?restaurantId=' + restaurant.id + '" id="rest" data-ajax="false">' +					
                '<h4>' + restaurant.title +'</h4>' +
                '<p>' + restaurant.cuisines + '</p>' +
                '<span class="ui-li-count">' + restaurant.ratings + '</span></a></li>');
           
        });
        $('#restaurantList').listview('refresh');
    });
                
}




