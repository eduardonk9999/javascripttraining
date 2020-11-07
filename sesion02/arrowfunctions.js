// Functions expressions
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
calcAge2(1992);

// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
calcAge3(1992);


const yearsUntilRetirment = birthYeah => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return retirement;
}

