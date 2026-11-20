import bcrypt from 'bcrypt'

const saltRounds = 14;
const plaintextPassword = "hunter12";
const hashedPassword = "$2b$14$J0h8F/A2d3Q1bgA9rqR7N.K9eKdNgqH0qOJw3lQhxyWtPSbsPRaRq"

// sign up
const hash = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hash);

// log in
const comparison = await bcrypt.compare(plaintextPassword, hashedPassword);

console.log(comparison);


