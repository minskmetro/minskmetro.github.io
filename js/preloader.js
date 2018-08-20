function closePreloader() {
    var preloader = document.getElementById('preloader');
    var closeBtn = document.getElementById('closebtn');
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    closeBtn.style.opacity = '0';
    closeBtn.style.visibility = 'hidden';
}


setInterval(function() {
    var h1 = document.getElementsByTagName('h1')[0];
    var dot = '.'
    if (h1.innerHTML.length == 15){
        h1.innerHTML = 'В разработке';
    }
    else{
        h1.innerHTML = h1.innerHTML + dot
    }
}, 1000);