$(function() {
    $(".btn").on("click", function() {
        window.location.href = "/index.html";
    });

    online();

    function online() {
        if(window.navigator.onLine) {
            window.location.href = "/index.html.html";
        }
    };
    window.addEventListener("online", function() {
        window.location.href = "/index.html";
    });
});