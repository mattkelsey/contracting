function slideLoad() {
    var dir = "gallery/img/slideshow";
    var fileextension = ".jpg";
    var nameArray = [];
    $.ajax({
        url: dir,
        sucess: function (data) {
            var location = 0;
            $(data).find("a:contains(" + fileextension + ")").each(
                function() {
                    nameArray[location] = this.href.replace(window.location.host, "").replace("http:///", "").replace("test/", "");
                    location++;

                }
            );
            console.log(nameArray);
            return nameArray;
        }
    });
}
