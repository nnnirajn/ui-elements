/** Very useful plugin for search functionality **/

$('#search').hideseek({
    // For showing No result 
    nodata: 'No results found'
});

// After search we can add custom class / css / event
$('#search').hideseek();
  $('#search').on("_after", function() {
    $(".search-content-wrapper").css("justify-content", "flex-start");
  });