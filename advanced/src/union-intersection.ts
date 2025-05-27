// Типы

type A = { name: string };
type B = { age: number };

type Union = A | B;
type Intersection = A & B;

const user_name = { name: "Name" };
const user_age = { age: 42 };
const user_name_age = { name: "Jane", age: 42 };

// Union - это как ИЛИ
let union: Union;
union = user_name;
union = user_age;
// Даже это работает, потому что одно из условий соблюдено
union = user_name_age;

// Intersection - это пересечение,
let intersection: Intersection;
intersection = user_name; // Error
intersection = user_age; // Error
// Срабатывает только когда оба типа есть в объекте
intersection = user_name_age;

// Tasks

const obj1 = { name: "Alice" };
const obj2 = { age: 30 };
const obj3 = { name: "Bob", age: 25 };

function processPersonUnion(person: Union) {
  if ("name" in person) person.name;

  if ("age" in person) person.age;

  if ("name" in person && "age" in person) {
    person.age;
    person.name;
  }
}

processPersonUnion(obj1);
processPersonUnion(obj2);
processPersonUnion(obj3);
