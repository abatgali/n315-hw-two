function initListeners() {
    $(".bars").click(function(e) {
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");

    })


    $(".links a").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links a").toggleClass("active");

    })

}

function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "")
    console.log(pageID);

    if(pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data) {
            console.log("data" + data);
            $("#app").html(data);
        });
    }else {
        $.get(`pages/home/home.html`, function(data) {
            // console.log("data" + ho);
            $("#app").html(data);
        });
    }
    
}


$(document).ready(function() {

    $(window).on("hashchange", changeRoute);
    changeRoute();

    initListeners();
});