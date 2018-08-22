if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    var widthH = window.screen.height * dpt;
    document.write('<meta name="viewport" content="user-scalable=no, width=' + widthM+ ', height=' + widthH + '">');
};


//————————————————————


var showSpoiler = document.getElementsByClassName('show_spoiler');

for (var i = 0; i < showSpoiler.length; i++) {
    showSpoiler[i].onmouseover = function(j){
        return function() {
            var spoiler = document.getElementsByClassName('information_spoiler_all_css')[j];

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
setInterval(test, 10000);
//————————————————————



// function showStartStations() {
//     var stations = document.getElementsByClassName('station_add');
//     var showStationsBtn = document.getElementsByClassName('search_first_station')[0];
//
//     if (stations[0].style.display != 'flex'){
//         showStationsBtn.style.borderBottomLeftRadius = '0';
//         showStationsBtn.style.borderBottomRightRadius = '0';
//         showStationsBtn.style.background = '#f0f0f0';
//
//
//         for (i = 0; i < stations.length; i++){
//             stations[i].style.display = 'flex';
//         }
//     }
//     else{
//         showStationsBtn.style.borderBottomLeftRadius = '24px';
//         showStationsBtn.style.borderBottomRightRadius = '24px';
//         showStationsBtn.style.background = '#e4e4e4';
//
//         for (i = 0; i < stations.length; i++){
//             stations[i].style.display = 'none';
//         }
//     }
// }

var options = {
    valueNames: [ 'name', 'born' ]
};
var userList = new List('users', options);

$('body').click(function (event) {
    console.log(event.target);
});

var firstSearch = document.getElementsByClassName('search')[0];

firstSearch.onfocus = function () {
    var shownStations = document.getElementsByClassName('shown_stations')[0];

    shownStations.style.display = 'block';
};

function closeFirstSearch () {
    var shownStations = document.getElementsByClassName('shown_stations')[0];

    shownStations.style.display = 'none';
};

function choosenStation() {
    firstSearch.innerHTML = '1';
    console.log(1);
}

















