const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 10);

let days, hours, minutes, seconds;

const countdown = document.getElementById("titles");

getCountdown();

const timer = setInterval(getCountdown, 1000);

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

function getCountdown() {
    const currentDate = new Date();
    let secondsLeft = (targetDate - currentDate) / 1000;

    if (secondsLeft < 0) {
        clearInterval(timer);
        return;
    }

    days = pad(parseInt(secondsLeft / 86400));  // 86400 seconds in a day
    secondsLeft = secondsLeft % 86400;

    hours = pad(parseInt(secondsLeft / 3600));  // 3600 seconds in an hour
    secondsLeft = secondsLeft % 3600;

    minutes = pad(parseInt(secondsLeft / 60));
    seconds = pad(parseInt(secondsLeft % 60));

    countdown.innerHTML = `
    <span>${days}</span>
    <span>${hours}</span>
    <span>${minutes}</span>
    <span>${seconds}</span>
    `;
}
