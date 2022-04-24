$(document).ready(function() {
    // var SITEURL = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1);
    // var path = window.location.pathname.split("/").pop();
    // $(".navBar").find('[data-menu="' + path + '"]').addClass("active");
    // if (path == "dashboard.jsp") {
    //     $("#topMenuPage").addClass('court');
    // } else if (path == "staffBooking.jsp") {
    //     $("#topMenuPage").addClass('booking');
    // } else if (path == "staffSetting.jsp") {
    //     $("#topMenuPage").addClass('setting');
    // }

    $(".mobileToggle").on("click", function() {
        if ($(".navigation_bar").hasClass("active")) {
            $(".navigation_bar").removeClass("active");
            $(this).removeClass("active");
            $('.toggle').attr("name", "list")

        } else {
            $(".navigation_bar").addClass("active");
            $(this).addClass("active");
            $('.toggle').attr("name", "close")

        }

    });


})