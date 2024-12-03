function speedDetector(speed) {
    const speedLimit = 70;


    //validate input
    if (isNaN(speed) || speed < 0 ) {
        alert("Invalid Speed. Please enter a positive number. Thank You.");
        return;
    }

    // Check if the speed is less than the speed limit or not.
    if (speed < speedLimit) {
        alert.log("Ok");
    } else {
        /* Calculate how much the speed of the car exceeds the limit,
           For every 5 km/h above the limit, the driver gets 1 demerit point.*/
        let demeritPoints = Math.floor((speed - speedLimit) / 5);

        // If the demerit points exceed 12, suspend the driver's license
        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            // Otherwise, print the total number of demerit points
            alert("Points: " + demeritPoints);
        }
    }
}

// Prompt the user to enter the car speed and check the result
let speed = parseInt(prompt("Enter the speed of the car:"));
speedDetector(speed);


//Happy Coding.