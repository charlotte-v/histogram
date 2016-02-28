var histogramDiv = document.getElementById("histogram");

var displayHistogram = function(data, element) {
  var values = data.split(",");
  for (var i = 0; i < values.length; i++) {
    var bar = document.createElement("div");
    bar.title = values[i];
    var max = Math.max.apply(null, values);
    bar.style.height = values[i] * 100 / max + "%";
    bar.style.width = 100 / values.length + "%";
    element.appendChild(bar);
  }

}

var dataFromHash = function() {
  return document.location.hash.substring(1);
}


displayHistogram(dataFromHash(), histogramDiv);

