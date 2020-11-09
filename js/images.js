// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("bttns");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/**
 * Exposes an event called "imagesLoaded" which is triggered 
 * when all images on the page have fully loaded.
 */
(function($) {
    var loadImages = new Promise(function(done) {
        var loading = $("img").length;
        $("img").each(function() {
            $("<img/>")
                .on('load', function() {
                    loading--;
                    if (!loading) done();
                })
                .on('error', function() {
                    loading--;
                    if (!loading) done();
                })
                .attr("src", $(this).attr("src"))
        });
    });
    loadImages.then(function() {
        $(document).trigger({
            type: "imagesLoaded"
        });
    });
})(jQuery);

$(document).on("imagesLoaded", function(){})