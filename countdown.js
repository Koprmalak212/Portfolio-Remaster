// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the countdown element in the DOM
    const countdownElement = document.querySelector(".countdown");

    // Set up a timer to update the countdown every second
    const countdownTimer = setInterval(() => {
        // Define the target date and time (December 24, 2024, 00:00 UTC)
        const countDownTime = new Date(1735081200 * 1000).getTime();
        // Get the current date and time
        const currentTime = new Date().getTime();
        // Calculate the time difference between the target and current time
        const timeLeft = countDownTime - currentTime;

        // If the time left is less than 0, stop the countdown and display "CHRISMAS"
        if (timeLeft < 0) {
            clearInterval(countdownTimer); // Stop the timer
            countdownElement.innerText = "CHRISMAS"; // Update the countdown text
            return; // Exit the function
        }

        // Calculate days, hours, minutes, and seconds left
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the countdown element with the calculated time left
        countdownElement.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }, 1000); // Repeat every 1000 milliseconds (1 second)
});
