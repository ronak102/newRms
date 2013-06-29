var serviceURL = "http://192.168.2.129/rms-services/api/";
//var serviceURL = "http://192.168.2.109/rms-services/EmployeeDirectoryJQM/services/";

var employees;
var restaurants;
$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});
//alert(serviceURL + 'restaurants');
function getEmployeeList() {
	$.getJSON(serviceURL + 'restaurants', function(data) {
		$('#employeeList li').remove();
		restaurants = data;
            
//		employees = data.items;
		$.each(restaurants, function(index, restaurant) {
                    
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + restaurant.id + '">' +
					
					'<h4>' + restaurant.title +'</h4>' +
					'<p>' + restaurant.cuisines + '</p>' +
					'<span class="ui-li-count">' + restaurant.ratings + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}