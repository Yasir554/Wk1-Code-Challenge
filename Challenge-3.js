
// Function to calculate PAYE (Tax).
function calculatePAYE(grossSalary) {
    let tax = 0;

    // Tax bands based on KRA rates.
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25; 
    } else if (grossSalary<= 500000){
        tax = 2400 + (32333-24000) * 0.25 + (grossSalary -32333) * 0.30;
    } else if (grossSalary <= 800000){
        tax = 2400 + (32333-24000) * 0.25 + (50000-32333) * 0.30 + (grossSalary-500000) * 0.325;
    } else {
        tax = 2400 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000-500000) * 0.325 + (grossSalary - 800000) * 0.35; 
    } 
    
    return tax;
}

// Function to calculate NHIF deductions.
function calculateNHIF(grossSalary) {
    // NHIF rates.
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; // For salaries above 100,000
}

// Function to calculate NSSF deductions.
function calculateNSSF(grossSalary) {
    // Assuming the new NSSF Act rates.
    const tier1 = Math.min(grossSalary, 6000) * 0.06; 
    const tier2 = Math.max(0, Math.min(grossSalary - 6000, 12000)) * 0.06; 

    return tier1 + tier2;
}

// Main function to calculate net salary.
function calculateNetSalary() {
    
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter your benefits: "));
    
    if (isNaN(basicSalary) || isNaN(benefits)){
        alert("Invalid Input");
        return calculateNetSalary();
    }
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions.
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary.
    const netSalary = grossSalary - (paye + nhif + nssf);

    // Output results (It gives out the output for our code.)
    alert(`
        === salary Breakdown ===
        Gross Salary : ${grossSalary.toFixed(2)}
        PAYE : ${paye.toFixed(2)}
        NHIF Deductions : ${nhif.toFixed(2)}
        NSSF Deductions : ${nssf.toFixed(2)}
        Net Salary : ${netSalary.toFixed(2)}
    `);
}

// Call or invoke the Function (so as the function to work).
calculateNetSalary();


//.Happy Coding.

