function myFunction() {
    var moreText = document.getElementById("completion-area-card-more");
    var btnText = document.getElementById("view-button");

    if (moreText.style.display === "block") {
        moreText.style.display = "none";
        btnText.innerHTML = "View more";

    } else {
        moreText.style.display = "block";
        btnText.innerHTML = "View less";
    }
}