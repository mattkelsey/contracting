//Image gallery setup
$('#blueimp-gallery').data('closeOnSlideClick', false);
$('#blueimp-gallery').data('toggleSlideshowOnSpace', false);

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

//Closes Nav when menu item is clicked
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

setTimeout(function(){
    console.log("loadedasdasd");
    $('body').animate({ scrollTop: 100 }, 1000)
}, 3000);

var services = ["additions", "kitchens", "bathrooms", "commercial", "special"];

for(i in services) {
    loadImages(services[i]);
}

function loadImages(section) {
    var dir = "img/" + section;
    var fileextension = ".jpg";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //List all png file names in the page
            console.log("success");
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http:///", "").replace("test/gallery","");
                //console.log(filename);
                //console.log(dir + filename);
                $("#" + section).append($("<div class='col-md-4 thumbnail-col'><a href="+ dir + filename +" data-gallery><img class = 'thumbnails' src="+ dir + filename +"></a></div>"));
            });
        }
    });
    //<div class='col-md-4 thumbnail-col'><a href="+ dir + filename +" data-gallery><img class = 'thumbnails' src="+ dir + filename +"></a></div> This is functional, however the image does not fill the div.
    //"<a href="+ dir + filename +" data-gallery><div class='col-md-4 thumbnail-col' style='background-image: url(" + dir + filename + ")'></div></a>"
}
