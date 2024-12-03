
//prompt the user to enter student marks (0 to 100) and input from a string to a number.
function studentGrade() {
    
    const input = prompt("Input the Student Marks Between 0 to 100 : ");
    const marks = Number(input);


    //check and validates if the input(marks)is Valid or not.
    if(isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input, Please enter a number between 0 and 100. Thank you.");
        return;
    }

    //Determining the grade using the contriol statement "Switch".
      //Declare a variable first and then write a control statement Switch.

    let grade;
    switch(true) {
        case marks >= 79:
            grade = "A";
            break;
        case marks >= 60:
            grade = "B";
            break;
        case marks >= 50:
            grade = "C";
            break;
        case marks >= 40:
            grade = "D";
            break;
        default:
            grade = "E"
    }


    //Output the Grade (It gives out the output for our code.).
    alert(`Grade for the Marks of student ${marks} is: ${grade}`); 
}


// Call or invoke the Function (so as the function to work).
studentGrade();

// Happy Coding.
