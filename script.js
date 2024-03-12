

function countdown(seconds , callback) {
    if (seconds >= 1) {
        document.getElementById("countdown").innerText = seconds;
        setTimeout(function() {
            countdown(seconds - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}


countdown(10 , function() {
    document.getElementById("countdown").innerText = "Happy Independence Day...!"
})

