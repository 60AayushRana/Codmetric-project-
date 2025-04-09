let countdown;
const timerDisplay = document.getElementById('timer');

document.getElementById('start').addEventListener('click', () => {
    const dateTimeInput = document.getElementById('datetime').value;
    const targetDate = new Date(dateTimeInput).getTime();
    
    if (isNaN(targetDate)) {
        alert("Please select a valid date and time.");
        return;
    }

    clearInterval(countdown);
    countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display result
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

        // If the countdown is over, display some text
        if (distance < 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Countdown Finished!";
        }
    }, 1000);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(countdown);
    document.getElementById('timer').innerText = "00 Days 00 Hours 00 Minutes 00 Seconds";
    document.getElementById('datetime').value = '';
});