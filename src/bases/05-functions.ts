function greet(name: string): string {
  return `Hola ${name}`;
}

// const greet2 = (name: string): string => {
//   return `Hola ${name}`;
// };

const greet2 = (name: string) => `Hola ${name}`;

const message = greet("Goku");
const message2 = greet2("Vegeta");

console.log({ message, message2 });

interface User {
  uid: string;
  username: string;
}

function getuser(): User {
  return {
    uid: "ABC-123",
    username: "El_Usuario",
  };
}

// const getuser2 = () => {
//   return {
//     uid: "ABC-123",
//     username: "El_Usuario",
//   };
// };

const getuser2 = () => ({
  uid: "ABC-123",
  username: "El_Usuario",
});

const user = getuser();
const user2 = getuser2();
console.log({ user, user2 });

const myNumbers: number[] = [1, 2, 3, 4, 5];
// myNumbers.forEach(function (value) {
//   console.log({ value });
// });
// myNumbers.forEach((value) => {
//   return console.log(value);
// });
myNumbers.forEach(console.log);
