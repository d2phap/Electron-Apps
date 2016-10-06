
$(document).ready(() => {

    $("#btn").on("click", () => {
        alert("Cliked")
    })


    // Button Play - onclick
    $(".app-controls .btn-play").on("click", () => {
        $(".app-controls .btn-play").addClass("hidden");
        $(".app-controls .btn-pause").removeClass("hidden");
    })
    // Button Pause - onclick
    $(".app-controls .btn-pause").on("click", () => {
        $(".app-controls .btn-play").removeClass("hidden");
        $(".app-controls .btn-pause").addClass("hidden");
    })

})




