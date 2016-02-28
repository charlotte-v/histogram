var histogramDiv = document.getElementById("histogram");

var displayHistogram = function(data, element) {
  var values = data.split(",");
  for (var i = 0; i < values.length; i++) {
    var bar = document.createElement("div");
    bar.style.height = values[i] + "px";
    element.appendChild(bar);
  }

}

var dataFromHash = function() {
  return document.location.hash.substring(1);
}


displayHistogram(dataFromHash(), histogramDiv);

