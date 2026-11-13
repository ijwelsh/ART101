let environmentTitle = "Polka Planet";

let environmentElements = ["city", "spaceship", "faces", "building"];

let mainEntity = {
    name: "The City",
    type: "soft border",
    mood: "amazing",
    isMoving: true,
    favoriteElement: environmentElements[1]

};
$("#change-button").click(function () {
    $("#element img").attr("src", "images/fishguy.png");
});