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

  if (typeof value === "object") {
    return cloneObj(value) as T;
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

function cloneObj<O extends object>(value: O): O {
  const result: O = {} as O;

  for (const key in value) {
    result[key] = deepClone(value[key]);
  }

  return result;
}

console.log(deepClone("Hello"));
console.log(deepClone(3));
console.log(deepClone(undefined));
console.log(deepClone(null));
console.log(deepClone(false));
console.log(deepClone([1, 2, "string", 3, "Abba"]));
console.log(
  deepClone({
    key: "key",
    "key 2": [1, 2, "str"],
  })
);
