function deepClone<T>(value: T): T {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "undefined" ||
    typeof value === "boolean" ||
    value === null
  ) {
    return value;
  }

  if (Array.isArray(value)) {
    return cloneArray(value) as T;
  }

  console.error("Shouldn't happen", value);
  return value;
}

function cloneArray<F>(value: F[]): F[] {
  const result: F[] = [];
  for (let i = 0; i < value.length; i++) {
    const item = deepClone(value[i]);
    result.push(item);
  }
  return result;
}

const arr = [1, 2, ["string"], 3, "Abba"];
const clonnedArr = deepClone(arr);
clonnedArr[2][0] = "CHANGED";

console.log(deepClone("Hello"));
console.log(deepClone(3));
console.log(deepClone(undefined));
console.log(deepClone(null));
console.log(deepClone(false));
console.log(deepClone([1, 2, "string", 3, "Abba"]));
