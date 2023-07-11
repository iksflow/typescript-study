interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter2(user2);
