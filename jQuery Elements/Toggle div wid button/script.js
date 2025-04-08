$("#buttons a").click(function () {
    var id = $(this).attr("id");
    $("#pages div").css("display", "none");
    $("#pages div#" + id + "").fadeIn("slow").css("display", "block");
    $("#buttons a").removeClass("selected");
    $(this).addClass("selected")
    event.preventDefault();
});