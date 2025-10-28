interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 31,
  address: {
    postalCode: "ABC123",
    city: "New York",
  },
};

// const spiderman: Person = {
//   firstName: "",
//   lastName: "",
//   age: 0
// }

console.log(ironman);

// const spiderman = { ...ironman };
// const spiderman = structuredClone(ironman);

// spiderman.firstName = "Peter";
// spiderman.lastName = "Parker";
// spiderman.age = 22;
// spiderman.address.city = "San Jose";

// console.log(ironman, spiderman);
