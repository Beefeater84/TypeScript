// Шаблонные литералы, как в обычном JS, но с типами
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

let example_string: `Example: ${string}`;

example_string = `Example: something`;
example_string = `Without Example prefix`; // Error

// -------------------

type CSSValue = number | `${number}px` | `${number}%` | `${number}em`;

function size(input: CSSValue) {
  return typeof input === "number" ? input + "px" : input;
}

size(10); // "10px"
size("20px"); // "20px"
size("50%"); // "50%"
size("2em"); // "2em"
size("10ex"); // Error: Type '"10ex"' is not assignable to type 'CSSValue'.

// -------------------

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";

/*
    @param style - is a combination of Size and Color types
*/
function applyStyle(style: `${Size}-${Color}`) {
  console.log(`Applying style: ${style}`);
}

applyStyle("small-primary"); // Valid
applyStyle("large-primary"); // Valid
applyStyle("medim-secondary"); // Invalid, typo in "medim"

// -------------------
type UUID = `${string}-${string}-${string}-${string}-${string}`;

function processUUID(id: UUID) {
  console.log(`Processing UUID: ${id}`);
}
processUUID("123e4567-e89b-12d3-a456-426614174000"); // Valid
processUUID("not a valid uuid"); // Invalid

// -------------------
type Prop = "name" | "age";

type GetterName<T extends string> = `get${Capitalize<T>}`;
type SetterName<T extends string> = `set${Capitalize<T>}`;

type GetNameMethods = GetterName<Prop>; // "getName" | "getAge"
type SetNameMethods = SetterName<Prop>; // "setName" | "setAge"

// TASKS
/*
Вопросы по документации (и вашей шпаргалке):
- В вашей шпаргалке есть пример example_string:Example: ${string}. Объясните, почемуexample_string = 'Without Example prefix';` вызывает ошибку компиляции.

- Рассмотрите тип CSSValue. Почему size("10ex"); приводит к ошибке, а size("2em"); — нет? Какова основная идея использования шаблонных литералов в этом примере?

- В функции applyStyle используется тип <span class="math-inline">\{Size\}\-</span>{Color}. Предположим, мы хотим также поддерживать стили с обратным порядком, например, primary-small. Как бы вы изменили определение типа для applyStyle, чтобы это было возможно?

- Шаблонные литеральные типы могут работать с объединениями строк. Если у вас есть type Direction = "up" | "down"; и type Axis = "x" | "y";, как вы определите тип MoveCommand, который включает все возможные команды перемещения, такие как "move-up-x", "move-down-y" и так далее?

- Представьте, что у вас есть URL-адреса API, которые всегда начинаются с /api/v1/users/ и за которыми следует идентификатор пользователя (число) и затем либо /profile, либо /posts. Как бы вы определили тип UserApiPath, который охватывает все эти возможные URL-адреса, например, /api/v1/users/123/profile или /api/v1/users/456/posts?

- Какие встроенные утилиты TypeScript (utility types) могут быть использованы в сочетании с шаблонными литеральными типами для преобразования регистра символов? Приведите пример использования одного из них.

- В каких сценариях использования шаблонные литеральные типы могут заменить или дополнить регулярные выражения? В чем их преимущество по сравнению с регулярными выражениями в контексте TypeScript?
*/
