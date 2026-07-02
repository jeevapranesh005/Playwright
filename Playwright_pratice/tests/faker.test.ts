import {faker} from "@faker-js/faker";

const fname = faker.person.firstName();
const lname = faker.person.lastName();
const email = faker.internet.email();
const pass = faker.internet.password();
const phone = faker.phone.number();
console.log("first name: ",fname);
console.log("last name: ",lname);
console.log("email : ",email);
console.log("pasword: ",pass)
console.log("phone: ",phone);