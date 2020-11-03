var acc = document.getElementsByClassName("menu-item");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var pan = this.nextElementSibling;
        this.classList.toggle("active1");
        if (pan.style.maxHeight) {
            pan.style.maxHeight = null;
        } else {

            pan.style.maxHeight = pan.scrollHeight + "px";
        }
    });
}