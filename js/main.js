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

var input = document.getElementsByTagName('input')[0];

var keysArr = [];

var stations = document.getElementsByClassName('station');
var a = 0;

var stationName = document.getElementsByClassName('name');


function openStations () {

    for (i = 0; i < stations.length; i++){
        stations[i].style.display = 'flex';
    }

};

input.onkeydown = function (e) {

    test();

    console.log(e);

    if (e.keyCode != 8 &&
        e.keyCode != 18 &&
        e.keyCode != 138 &&
        e.keyCode != 17 &&
        e.keyCode != 9 &&
        e.keyCode != 27 &&
        e.keyCode != 91 &&
        e.keyCode != 20 &&
        e.keyCode != 16 &&
        e.keyCode != 13){

        keysArr.push(e.key);

    }
    else if (e.keyCode == 27){
        console.warn(0);
        keysArr = [];
    }
    else if (e.keyCode == 8){

        keysArr.pop();

    }
    else{
        console.error('СРАБОТАЛ ОТЛАДЧИК ! ! ! СООБЩИТЕ, ПРИ КАКОМ УСЛОВИИ ЭТО ПРОИЗОШЛО');
    }

    var searchText = keysArr.join('').toUpperCase();

    // console.log(searchText + ' было введено');

    for (i = 0; i < stations.length; i++){

        if (stations[i].innerHTML.includes(searchText)){

            stations[i].style.display = 'flex';
        }
        else{

            stations[i].style.display = 'none';
        }
    }
};


function test() {

    for (var i = 0; i < stations.length; i++) {
        stations[i].onclick = function(j){
            return function() {

                input.value = '';
                input.placeholder = stationName[j].innerHTML;
                // console.log(stationName[j].innerHTML);

                keysArr = [];

                if (stations[j].style.display != 'none'){

                    for (i = 0; i < stations.length; i++){
                        stations[i].style.display = 'none';
                    }

                }
            }
        }(i);
    }

    // console.log('test сработал');


}
test();


function closeStations () {

    // console.log(' в плейсхолдере ' + input.placeholder);

    for (i = 0; i < stations.length; i++) {
        stations[i].style.display = 'none';
    }
}


// todo настроить работу капслока

// window.onclick = stationsListUpdate();

// function stationsListUpdate() {
//     for (var a = 0; a < stations.length; a++) {
//         stations[a].onclick = function(j){
//             return function() {
//
//                 console.log('номер станции ' + j);
//
//                 console.log(stationName[j].innerHTML + ' название');
//
//             }
//         }(a);
//     }
// }







var input2 = document.getElementsByTagName('input')[1];

var keysArr2 = [];

var stations2 = document.getElementsByClassName('station2');
var a = 0;

var stationName2 = document.getElementsByClassName('name2');


function openStations2 () {

    for (i = 0; i < stations2.length; i++){
        stations2[i].style.display = 'flex';
    }

};

input2.onkeydown = function (e) {

    test2();

    console.log(e);

    if (e.keyCode != 8 &&
        e.keyCode != 18 &&
        e.keyCode != 138 &&
        e.keyCode != 17 &&
        e.keyCode != 9 &&
        e.keyCode != 27 &&
        e.keyCode != 91 &&
        e.keyCode != 20 &&
        e.keyCode != 16 &&
        e.keyCode != 13){

        keysArr2.push(e.key);

    }
    else if (e.keyCode == 27){
        console.warn(0);
        keysArr2 = [];
    }
    else if (e.keyCode == 8){

        keysArr2.pop();

    }

    else{
        console.error('СРАБОТАЛ ОТЛАДЧИК ! ! ! СООБЩИТЕ, ПРИ КАКОМ УСЛОВИИ ЭТО ПРОИЗОШЛО');
    }

    var searchText2 = keysArr2.join('').toUpperCase();

    // console.log(searchText + ' было введено');

    for (i = 0; i < stations2.length; i++){

        if (stations2[i].innerHTML.includes(searchText2)){

            stations2[i].style.display = 'flex';
        }
        else{

            stations2[i].style.display = 'none';
        }
    }

};


function test2() {

    for (var i = 0; i < stations2.length; i++) {
        stations2[i].onclick = function(j){
            return function() {

                input2.value = '';
                input2.placeholder = stationName2[j].innerHTML;
                // console.log(stationName2[j].innerHTML);

                keysArr2 = [];

                if (stations2[j].style.display != 'none'){

                    for (i = 0; i < stations2.length; i++){
                        stations2[i].style.display = 'none';
                    }

                }
            }
        }(i);
    }

    // console.log('test сработал');


}
test2();


function closeStations2 () {

    // console.log(' в плейсхолдере ' + input.placeholder);

    for (i = 0; i < stations2.length; i++) {
        stations2[i].style.display = 'none';
    }
}


// todo настроить работу капслока





// var createWayBtn = document.getElementById('createway');

var startSt = document.getElementsByClassName('start_st')[0];

var transferStOne = document.getElementsByClassName('transfer_st_one')[0];
var transferStSlash = document.getElementsByClassName('transfer_st_slash')[0];
var transferStTwo = document.getElementsByClassName('transfer_st_two')[0];


var endSt = document.getElementsByClassName('end_st')[0];
var wayBox = document.getElementsByClassName('console')[0];

var startStInfo = document.getElementsByClassName('start_st_info')[0];

var transferStInfo = document.getElementsByClassName('transfer_st_info')[0];

var endStInfo = document.getElementsByClassName('end_st_info')[0];

function createWay() {


    var firstNameHolder = input.placeholder;
    var firstName = firstNameHolder;

    var secondNameHolder = input2.placeholder;
    var secondName = secondNameHolder;

    // console.log(firstName);
    // console.log(secondName);

    if (firstName == 'Введите станцию отправления' && secondName == 'Введите станцию прибытия'){
        alert('Станции не были введены !');
    }
    else if (firstName == 'Введите станцию отправления') {
        alert('Первая станция не была введена !');
    }
    else if (secondName == 'Введите станцию прибытия') {
        alert('Вторая станция не была введена !');
    }
    else{

        for (i = 0; i < stationName.length; i++){

            // console.log(firstName == stationName[i].innerHTML);

            if (firstName == stationName[i].innerHTML){

                for (a = 0; a < stationName2.length; a++){

                    if (secondName == stationName2[a].innerHTML){

                        // console.log(secondName == stationName2[a].innerHTML);
                        // console.log('сработало');
                        // console.log('первая станция ' + stationName[i].id + ' вторая станция ' + stationName2[a].id);

                        wayBox.style.display = 'flex';

                        if (stationName[i].innerHTML == stationName2[a].innerHTML) {
                            console.warn('Вы выбрали одинаковые станции !)');


                            startStInfo.innerHTML = '';
                            startSt.innerHTML = '';

                            transferStInfo.innerHTML = '';

                            transferStOne.innerHTML = '';
                            transferStSlash.innerHTML = 'Вы выбрали одинаковые станции )';
                            transferStTwo.innerHTML = '';

                            endStInfo.innerHTML = '';
                            endSt.innerHTML = ' ';
                        }

                        else if (stationName[i].id == 'greenstation' && stationName2[a].id == 'greenstation'){
                            console.warn('Станции находятся на одной линии. ' + stationName[i].innerHTML + ' → ' + stationName2[a].innerHTML);
                            console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = '';

                            transferStOne.innerHTML = '';
                            transferStSlash.innerHTML = '';
                            transferStTwo.innerHTML = '';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            startSt.style.color = '#29ae47';
                            endSt.style.color = '#29ae47';
                        }
                        else if (stationName[i].id == 'greenstation' && stationName2[a].id == 'redstation'){
                            console.warn('Станции находятся на разных линиях. ' + stationName[i].innerHTML + ' → ЮБИЛЕЙНАЯ ПЛОЩАДЬ / ФРУНЗЕНСКАЯ → ' + stationName2[a].innerHTML);
                            console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = 'Следуйте к станциям пересадок: ';

                            transferStOne.innerHTML = 'ЮБИЛЕЙНАЯ ПЛОЩАДЬ';
                            transferStSlash.innerHTML = ' / ';
                            transferStTwo.innerHTML = 'ФРУНЗЕНСКАЯ';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            transferStOne.style.color = '#29ae47';
                            transferStTwo.style.color = '#eb0602';

                            startSt.style.color = '#29ae47';
                            endSt.style.color = '#eb0602';
                        }
                        else if (stationName[i].id == 'greenstation' && stationName2[a].id == 'bluestation'){
                            console.warn('Станции находятся на разных линиях. ' + stationName[i].innerHTML + ' → ВОКЗАЛЬНАЯ / ПЛОЩАДЬ ЛЕНИНА → ' + stationName2[a].innerHTML);
                            console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = 'Следуйте к станциям пересадок: ';

                            transferStOne.innerHTML = 'ВОКЗАЛЬНАЯ';
                            transferStSlash.innerHTML = ' / ';
                            transferStTwo.innerHTML = 'ПЛОЩАДЬ ЛЕНИНА';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            transferStOne.style.color = '#29ae47';
                            transferStTwo.style.color = '#0061b4';

                            startSt.style.color = '#29ae47';
                            endSt.style.color = '#0061b4';
                        }

                        else if (stationName[i].id == 'redstation' && stationName2[a].id == 'redstation'){
                            console.warn('Станции находятся на одной линии. ' + stationName[i].innerHTML + ' → ' + stationName2[a].innerHTML);
                            // console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = '';

                            transferStOne.innerHTML = '';
                            transferStSlash.innerHTML = '';
                            transferStTwo.innerHTML = '';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            startSt.style.color = '#eb0602';
                            endSt.style.color = '#eb0602';
                        }
                        else if (stationName[i].id == 'redstation' && stationName2[a].id == 'greenstation'){
                            console.warn('Станции находятся на разных линиях. ' + stationName[i].innerHTML + ' → ФРУНЗЕНСКАЯ / ЮБИЛЕЙНАЯ ПЛОЩАДЬ → ' + stationName2[a].innerHTML);
                            console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = 'Следуйте к станциям пересадок: ';

                            transferStOne.innerHTML = 'ФРУНЗЕНСКАЯ';
                            transferStSlash.innerHTML = ' / ';
                            transferStTwo.innerHTML = 'ЮБИЛЕЙНАЯ ПЛОЩАДЬ';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            transferStOne.style.color = '#eb0602';
                            transferStTwo.style.color = '#29ae47';

                            startSt.style.color = '#eb0602';
                            endSt.style.color = '#29ae47';
                        }
                        else if (stationName[i].id == 'redstation' && stationName2[a].id == 'bluestation'){
                            console.warn('Станции находятся на разных линиях. ' + stationName[i].innerHTML + ' → КУПАЛОВСКАЯ / ОКТЯБРЬСКАЯ → ' + stationName2[a].innerHTML);
                            // console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = 'Следуйте к станциям пересадок: ';

                            transferStOne.innerHTML = 'КУПАЛОВСКАЯ';
                            transferStSlash.innerHTML = ' / ';
                            transferStTwo.innerHTML = 'ОКТЯБРЬСКАЯ';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            transferStOne.style.color = '#eb0602';
                            transferStTwo.style.color = '#0061b4';

                            startSt.style.color = '#eb0602';
                            endSt.style.color = '#0061b4';
                        }

                        else if (stationName[i].id == 'bluestation' && stationName2[a].id == 'bluestation'){
                            console.warn('Станции находятся на одной линии. ' + stationName[i].innerHTML + ' → ' + stationName2[a].innerHTML);
                            // console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = '';

                            transferStOne.innerHTML = '';
                            transferStSlash.innerHTML = '';
                            transferStTwo.innerHTML = '';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            startSt.style.color = '#0061b4';
                            endSt.style.color = '#0061b4';
                        }
                        else if (stationName[i].id == 'bluestation' && stationName2[a].id == 'redstation'){
                            console.warn('Станции находятся на разных линиях. ' + stationName[i].innerHTML + ' → ОКТЯБРЬСКАЯ / КУПАЛОВСКАЯ → ' + stationName2[a].innerHTML);
                            // console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = 'Следуйте к станциям пересадок: ';

                            transferStOne.innerHTML = 'ОКТЯБРЬСКАЯ';
                            transferStSlash.innerHTML = ' / ';
                            transferStTwo.innerHTML = 'КУПАЛОВСКАЯ';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;

                            transferStOne.style.color = '#0061b4';
                            transferStTwo.style.color = '#eb0602';

                            startSt.style.color = '#0061b4';
                            endSt.style.color = '#eb0602';
                        }
                        else if (stationName[i].id == 'bluestation' && stationName2[a].id == 'greenstation'){
                            console.warn('Станции находятся на разных линиях. ' + stationName[i].innerHTML + ' → ПЛОЩАДЬ ЛЕНИНА / ВОКЗАЛЬНАЯ → ' + stationName2[a].innerHTML);
                            console.warn('Зеленая ветка еще не открыта, маршруты по ней невозможны (');


                            startStInfo.innerHTML = 'Начальная станция: ';
                            startSt.innerHTML = stationName[i].innerHTML;

                            transferStInfo.innerHTML = 'Следуйте к станциям пересадок: ';

                            transferStOne.innerHTML = 'ПЛОЩАДЬ ЛЕНИНА';
                            transferStSlash.innerHTML = ' / ';
                            transferStTwo.innerHTML = 'ВОКЗАЛЬНАЯ';

                            endStInfo.innerHTML = 'Далее следуйте к станции: ';
                            endSt.innerHTML = stationName2[a].innerHTML;


                            transferStOne.style.color = '#0061b4';
                            transferStTwo.style.color = '#29ae47';

                            startSt.style.color = '#0061b4';
                            endSt.style.color = '#29ae47';
                        }
                    }
                }
            }
        }
    }
}



function closeWayBox() {
    wayBox.style.display = 'none';
}





















