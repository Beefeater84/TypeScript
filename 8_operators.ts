// Операторы, которые помогают нам работать с TS
// Exclude<> - исключить поля
// Pick<> - забрать поля

interface User {
  name: string;
  email: string;
  age: number;
}

// keyof - проходимся по ключам объекта

type UserKeys = keyof User; // Теперь у нас тут есть 3 типа: name / email / age
const key1: UserKeys = "name";
// const key2:UserKeys = "registratedDate" - не будет работать, потому что его нет в списке User

//========================================

interface User2 {
  _id: string;
  name: string;
  age: number;
  cratedDate: Date;
}
// нам нужно забрать не все поля, а только name и age

type userNoMeta1 = Exclude<keyof User2, "_id" | "createdDate">;
type userNoMeta2 = Pick<User2, "name" | "age">;

const key2: userNoMeta1 = "name";
// const key3: userNoMeta1 = '_id' - работать не будет

// Awaited
// Показывает, что вернется ответ, что бы его ждем и что вложенных промисов может быть сколько угодно
type AwaitedReturnType = Awaited<Promise<Promise<string>>>; // Promise<string>

//

function getSomeData(): Promise<string> {
  return Promise.resolve("some data");
}

// Возвращает тип, который вернет getSomeData
type GetViewByIdResponse = Awaited<ReturnType<typeof getSomeData>>;
