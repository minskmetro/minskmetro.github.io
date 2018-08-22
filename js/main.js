if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    var widthH = window.screen.height * dpt;
    document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
};


//————————————————————


var showSpoiler = document.getElementsByClassName('show_spoiler');
console.log(showSpoiler);

for (var i = 0; i < showSpoiler.length; i++) {
    showSpoiler[i].onmouseover = function(j){
        return function() {
            var spoiler = document.getElementsByClassName('information_spoiler_all_css')[j];
            console.log(spoiler);


            showSpoiler[j].addEventListener('mouseout', function () {
                spoiler.style.visibility = 'hidden';
                spoiler.style.display = 'none';
                showSpoiler[j].style.borderBottomColor = '#fff';
            });

            spoiler.style.visibility = 'visible';
            spoiler.style.display = 'flex';
            showSpoiler[j].style.borderBottomColor = '#eb0602';

            spoiler.addEventListener('mouseover', function () {
                spoiler.style.visibility = 'visible';
                spoiler.style.display = 'flex';
                showSpoiler[j].style.borderBottomColor = '#eb0602';
            });

            spoiler.addEventListener('mouseout', function () {
                spoiler.style.visibility = 'hidden';
                spoiler.style.display = 'none';
                showSpoiler[j].style.borderBottomColor = '#fff';
            })
        }
    }(i);
}

//————————————————————

var frame = 1;
function test () {
    var backgroundSlider = document.getElementById('img_slider');
    if (frame <3) {
        frame++;
        console.log(frame);
        backgroundSlider.style.backgroundImage = 'url(imgs/' + frame + 'sliderpic.png)';
    }
    else{
        frame = 0;
        backgroundSlider.style.backgroundImage = 'url(imgs/1sliderpic.png)';
    }
}
setInterval(test, 10000)









