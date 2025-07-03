// Awaited<T> - заменяет вложенные промисы
// Awaited<T> = Promise<Promise<Promise<T>>>

const awaited = new Promise((res) => res("Hello, World!"));


// ================================================

// Partial - это встроенный тип, который позволяет сделать все свойства в объекте необязательными
// Readonly - это встроенный тип, который позволяет сделать все свойства в объекте только для чтения
// Required - это встроенный тип, который позволяет сделать все свойства в объекте обязательными

function createUser(name: string, age: number): User {
  const user: Partial<User> = {};

  if (name.length !== 0) {
    user.name = name;
  }

  if (age > 0) {
    user.age = age;
  }

  return user as User;
}

const Elena: Readonly<User> = createUser("Elena", 20);
Elena.name = 123; // ошибка, потому что readonly

// Теперь все поля в объекте обязательны, включая phone
const Igor: Required<User> = {
  name: "Igor",
  age: 25,
  phone: 123456789,
};

// ================================================
// Omit - исключает из объекта какие-то свойства
// Pick - добавляет в новый тип только определенные свойства
// Extract - извлекает из одного типа те свойства, которые есть в другом типе
// Exclude - исключает из одного типа те свойства, которые есть в другом типе

interface User3 {
  name: string;
  age: number;
  hobbies: string[];
}

type UserData = Omit<User3, "hobbies">; // 'hobbies' - это ключ, который мы хотим исключить из User3
type UserData2 = Pick<User3, "name" | "age">; // 'name' | 'age' - это ключи, которые мы хотим взять из User3

type UserStringFields = Extract<"age" | "name" | "some", keyof User3>; // 'name' | 'age', потому что в User3 нет ключа 'some'
type UserStringFields2 = Exclude<"a" | "b" | User3, string>; // User3
