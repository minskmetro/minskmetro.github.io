var information = document.getElementById('information_li');
information.addEventListener('mouseover', spoilerOne);

function spoilerOne() {
    var firstSpoiler = document.getElementById('information_spoiler_st');

    information.addEventListener('mouseout', function () {
            firstSpoiler.style.visibility = 'hidden';
            firstSpoiler.style.display = 'none';
            information.style.borderBottomColor = '#fff';
    });

    firstSpoiler.style.visibility = 'visible';
    firstSpoiler.style.display = 'flex';
    information.style.borderBottomColor = '#eb0602';

    firstSpoiler.addEventListener('mouseover', function () {
        firstSpoiler.style.visibility = 'visible';
        firstSpoiler.style.display = 'flex';
        information.style.borderBottomColor = '#eb0602';

    });

    firstSpoiler.addEventListener('mouseout', function () {
        firstSpoiler.style.visibility = 'hidden';
        firstSpoiler.style.display = 'none';
        information.style.borderBottomColor = '#fff';
    })
}

//————————————————————

var lineScheme = document.getElementById('line_scheme_li');
lineScheme.addEventListener('mouseover', spoilerTwo);

function spoilerTwo() {
    var secondSpoiler = document.getElementById('information_spoiler_nd');


    lineScheme.addEventListener('mouseout', function () {
        secondSpoiler.style.visibility = 'hidden';
        secondSpoiler.style.display = 'none';
        lineScheme.style.borderBottomColor = '#fff';
    });

    secondSpoiler.style.visibility = 'visible';
    secondSpoiler.style.display = 'flex';
    lineScheme.style.borderBottomColor = '#eb0602';

    secondSpoiler.addEventListener('mouseover', function () {
        secondSpoiler.style.visibility = 'visible';
        secondSpoiler.style.display = 'flex';
        lineScheme.style.borderBottomColor = '#eb0602';

    });

    secondSpoiler.addEventListener('mouseout', function () {
        secondSpoiler.style.visibility = 'hidden';
        secondSpoiler.style.display = 'none';
        lineScheme.style.borderBottomColor = '#fff';
    })
}

//————————————————————

var citizensAppeals = document.getElementById('citizens_appeals');
citizensAppeals.addEventListener('mouseover', spoilerThree);

function spoilerThree() {
    var thirdSpoiler = document.getElementById('information_spoiler_rd');

    citizensAppeals.addEventListener('mouseout', function () {
        thirdSpoiler.style.visibility = 'hidden';
        thirdSpoiler.style.display = 'none';
        citizensAppeals.style.borderBottomColor = '#fff';
    });

    thirdSpoiler.style.visibility = 'visible';
    thirdSpoiler.style.display = 'flex';
    citizensAppeals.style.borderBottomColor = '#eb0602';

    thirdSpoiler.addEventListener('mouseover', function () {
        thirdSpoiler.style.visibility = 'visible';
        thirdSpoiler.style.display = 'flex';
        citizensAppeals.style.borderBottomColor = '#eb0602';

    });

    thirdSpoiler.addEventListener('mouseout', function () {
        thirdSpoiler.style.visibility = 'hidden';
        thirdSpoiler.style.display = 'none';
        citizensAppeals.style.borderBottomColor = '#fff';
    })
}

//————————————————————

var services = document.getElementById('services');
services.addEventListener('mouseover', spoilerFour);

function spoilerFour() {
    var fourthSpoiler = document.getElementById('information_spoiler_th');

    services.addEventListener('mouseout', function () {
        fourthSpoiler.style.visibility = 'hidden';
        fourthSpoiler.style.display = 'none';
        services.style.borderBottomColor = '#fff';
    });

    fourthSpoiler.style.visibility = 'visible';
    fourthSpoiler.style.display = 'flex';
    services.style.borderBottomColor = '#eb0602';

    fourthSpoiler.addEventListener('mouseover', function () {
        fourthSpoiler.style.visibility = 'visible';
        fourthSpoiler.style.display = 'flex';
        services.style.borderBottomColor = '#eb0602';

    });

    fourthSpoiler.addEventListener('mouseout', function () {
        fourthSpoiler.style.visibility = 'hidden';
        fourthSpoiler.style.display = 'none';
        services.style.borderBottomColor = '#fff';
    })
}

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
    }
}
setInterval(test, 3000)









