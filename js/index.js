$(document).ready(function(){
  
  var url;
  var searchWord;
  
  function getStuff(){
    var searchWord = $("#searchWord").val();
    
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&prop=extracts&exsentences=1&search=" + searchWord + "&limit=8&callback=?";
 
    $.ajax({
    type: "GET",
    url: url,
    async: false,
    dataType: "json",
    success: function(data){
      for(var i = 0; i < data[1].length; i++){
        $("#results").prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
      }

    },
    error: function(error){
      alert("Doesn't exist!");
    }
  });
  }
  
  $("#search").click(function(){
    getStuff();
    }
  );
  
  $("#searchWord").keyup(function(event){
    if (event.keyCode === 13){
       $("#search").click();
    }
    
  });
  
  
  
});