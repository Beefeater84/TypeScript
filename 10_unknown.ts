// unknown и any
// any - это тип, который может быть чем угодно
// unknown - это тип, который может быть чем угодно, но чтобы провести любую операцию с ним, нужно сначала проверить его тип

let Unknown: unknown;
let Any: any;

Any.ts.dont.check.anything.and.allows.anything.show(); // TS не проверяет типы, и мы можем делать что угодно с переменной типа any
Unknown.show(); // Error: Property 'show' does not exist on type 'unknown'.

// Мы можем проводить с ним операции сравнения == === != !== || && и тп

let b = Unknown === 123;

if (typeof b === "number") {
  // Проверяем тип и можем выполнять действия
  console.log(b + 5);
}
