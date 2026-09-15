//  .find .map .filter .reduce .find .findIndex .indexOf (((.forEach)))

// Rule 1: Use loop methods in JavaScript

// rule 2: dont use for loops unless if you are finger counting

// rule 3: use .map if you need the data afterwards, otherwise only use .foreeach if you don't

// mapp returns a new list of the same size: 1:1

const numbers = [1, 2, 3, 4, 5];

// task: double the numbers

const doubledNumbers = numbers.map((number) => number * 2)

console.log(doubledNumbers)


const numbersIterated = numbers.map((value, index, array) => console.log(value, index, array));




const countries = [
    { name: "Lesotho", gdp: 530 },
    { name: "Papua New Guinea", gdp: 1025 },
    { name: "Saint Vincent and the Grenadines", gdp: 1200 },
]

// task: if the country is lesotho, boost the gdp with 500
console.log(countries)

// const countriesWithGdpUpdated = countries.map((country) => {
//     if(country.name === "Lesotho"){
//         country.gdp += 500;   
//     }
//     return country;
// });

const countriesWithGdpUpdated = countries.map((country) => 
    ({ name: country.name, 
        gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp }))


console.log(countriesWithGdpUpdated);

// task filter out the countries where the dps is below 1000 in the countries variable
// side note: this doesnt work because of side effects. we changed the same object in memory in the original .map
const countriesWithFilteredGDP = countries.filter((country) => country.gdp > 1000);


console.log(countriesWithFilteredGDP)
