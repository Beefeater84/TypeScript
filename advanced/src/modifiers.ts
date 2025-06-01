// + ? -
// Это модификаторы, которе мы можем использовать для свойств и часто применияем в mapped types
// + явно добавляет свойство
// ? делает свойсто необязательным
// - удаляет свойство

// Например

type OriginalType = {
  prop1: string;
  prop2?: number;
};

type ReadonlyType<T> = {
  readonly [P in keyof T]: T[P];
};

// или явно с +
type ReadonlyTypeExplicit<T> = {
  +readonly [P in keyof T]: T[P]; // По сути тоже самое, но с явным указанием модификатора
};

type MyReadonly = ReadonlyType<OriginalType>;
// Результат:
// type MyReadonly = {
//   readonly prop1: string;
//   readonly prop2?: number;
// }

// Пример у удаления модификатора readonly

type ReadonlyOriginal = {
  readonly prop1: string;
  readonly prop2: number;
};

type MutableType<T> = {
  -readonly [P in keyof T]: T[P];
};

type MyMutable = MutableType<ReadonlyOriginal>;
// Результат:
// type MyMutable = {
//   prop1: string;
//   prop2: number;
// }