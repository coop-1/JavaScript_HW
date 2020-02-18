var aliens = data

var tbody = d3.select("tbody")

// extract data and append to table
aliens.forEach(function(aliens){
  var row = tbody.append("tr");
  Object.entries(aliens)
    .forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

console.log(aliens)

//filter button for input date
d3.select('#filter-btn').on("click",function(){
    // insert code to filter based on date

    var inputvalue = d3.select("#datetime").property("value");

    console.log(inputvalue)

    //filter based on input from user
    const filtered = aliens.filter(aliens => aliens.datetime === inputvalue)

    console.log(filtered)

    //clear table entries
    tbody.html("")

    //rebuild table based on filtered value
    filtered.forEach(function(filtered){
      var row = tbody.append("tr");
      Object.entries(filtered)
        .forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });
});


//clear filter button
d3.select('#clear-filter-btn').on("click",function(){
    
    aliens.forEach(function(aliens){
        var row = tbody.append("tr");
        Object.entries(aliens)
          .forEach(function([key, value]){
              var cell = row.append("td");
              cell.text(value);
          });
      });
});



