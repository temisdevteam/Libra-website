
Chart.defaults.color = "#9E9E9E";

var ctx = document.getElementById('tokenChart').getContext('2d');

var background_1 = ctx.createLinearGradient(255, 255, 255, 180);
background_1.addColorStop(0.01, '#00000000');
background_1.addColorStop(1, '#FB8B01');


const labels = [
    'Jun',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'Jul',
];

const data = {
    labels: labels,
    datasets: [{
        label: '',
        fill: true,
        backgroundColor: [
            background_1,
        ], 
        borderColor: '#D87D2B',
        data: [0, 0.00015, 0.00017, 0.00022, 0.00030, 0.00043, 0.00060, 0.00060],
        borderDash: [8, 5],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: false,
            tooltip: false,

        },
        // interaction: {
        //     mode: 'index',
        //     intersect: false
        // },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: '2022',
                    font: { size: 18, weight: 900 ,family: 'inter-medium'}
                },
                grid: {
                    display: false,
                },
                ticks: {
                    font:{ size:14 ,family: 'inter-medium'} ,
                    padding: 10,
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'USD',
                    font: { size: 14, weight: 900 ,family: 'inter-medium'}
                },
                grid: {
                    display: true,
                    color:'#D9D5D5',
                    drawBorder: false
                },
                ticks: {
                    font:{ size:14 ,family: 'inter-medium' } ,
                    padding: 10,
                }
            },
        },
        layout: {
            padding: {
                top: 50
            }
        },
    }
};

const tokenChart = new Chart(
    document.getElementById('tokenChart'),
    config
);


$(".countdown-box").addClass("countdown-box-light");
$(".countdown-number-box").addClass("countdown-number-box-light");
$(".tokens-status-box").addClass("tokens-status-box-light");
$(".progress-bar-bg").addClass("progress-bar-bg-light");


function changeThemeColorLixxToken() {
    if (document.querySelector('.change-theme-input').checked == true) {
        $(".countdown-box").addClass("countdown-box-light");
        $(".countdown-number-box").addClass("countdown-number-box-light");
        $(".tokens-status-box").addClass("tokens-status-box-light");
        $(".progress-bar-bg").addClass("progress-bar-bg-light");

    } else {
        $(".countdown-box").removeClass("countdown-box-light");
        $(".countdown-number-box").removeClass("countdown-number-box-light");
        $(".tokens-status-box").removeClass("tokens-status-box-light");
        $(".progress-bar-bg").removeClass("progress-bar-bg-light");
        Chart.defaults.color = "#ffffff";

    }
}

function changeThemeColorFunctions(){
    changeThemeColorLixxToken();
    changeThemeColor();
}
$(".change-theme-input").click(changeThemeColorFunctions);

// Set the date we're counting down to
var countDownDate = new Date("May 28, 2022 20:19:00").getTime();
var distance;
function countDown() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    var outputDays = [];
    var daysArray = days.toString();

    for (var i = 0, len = daysArray.length; i < len; i += 1) {
        outputDays.push(+daysArray.charAt(i));
    }

    var outputHours = [];
    var hoursArray = hours.toString();

    for (var i = 0, len = hoursArray.length; i < len; i += 1) {
        outputHours.push(+hoursArray.charAt(i));
    }
    var outputMinutes = [];
    var minutesArray = minutes.toString();

    for (var i = 0, len = minutesArray.length; i < len; i += 1) {
        outputMinutes.push(+minutesArray.charAt(i));
    }

    if (!outputDays[1]) {
        document.querySelector(".countdown-days-single").innerHTML = outputDays[0];
        document.querySelector(".countdown-days-decimal").innerHTML = "0";
    } else if (outputDays[1]) {
        document.querySelector(".countdown-days-decimal").innerHTML = outputDays[0];
        document.querySelector(".countdown-days-single").innerHTML = outputDays[1];
    }

    if (!outputHours[1]) {
        document.querySelector(".countdown-hours-single").innerHTML = outputHours[0];
        document.querySelector(".countdown-hours-decimal").innerHTML = "0";
    } else if (outputHours[1]) {
        document.querySelector(".countdown-hours-decimal").innerHTML = outputHours[0];
        document.querySelector(".countdown-hours-single").innerHTML = outputHours[1];
    }

    if (!outputMinutes[1]) {
        document.querySelector(".countdown-minutes-single").innerHTML = outputMinutes[0];
        document.querySelector(".countdown-minutes-decimal").innerHTML = "0";
    } else if (outputMinutes[1]) {
        document.querySelector(".countdown-minutes-decimal").innerHTML = outputMinutes[0];
        document.querySelector(".countdown-minutes-single").innerHTML = outputMinutes[1];
    }


};
var x = setInterval(countDown, 60000);

document.addEventListener("DOMContentLoaded", function () {
    countDown();
});

if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
}


const roadMapSwiper = new Swiper('.swiper.road-map-swiper', {
    slidesPerView: 1.95,
    allowTouchMove: true,
    centeredSlides: false,
    navigation: {
        nextEl: '.road-map-swiper-next',
        prevEl: '.road-map-swiper-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1.95,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 4.97,
        },
        1900:{
            slidesPerView: 5,
        }

    }
});

document.querySelector(".road-map-swiper-card-active .road-map-circle").src = "./assets/img/Group 59.png"
