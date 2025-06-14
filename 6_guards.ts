// Нужны чтобы мы не передали в функцию то, чего там быть не должно
// это ситуации, когда мы четко определяем какие типы пападают в функцию (точнее несколько) и как они должны обрабатываться

// Есть несколько typeGuard операторов
// typeof
// if / else
// in

function isNumber(val: number | string): val is number {
  // Typeguard фукнкция должна вернуь true / false
  // val is number - благодаря is ts понимает что мы проверяем параметр. Вместо number может быть сложный type
  // и если мы возвращаем true, то это значит, что val - это number
  return typeof val === "number";
}
function getPassword(password: number | string) {
  if (isNumber(password)) {
    return password.toFixed(0);
  }
  return password.trim();
}

// Ситуация, когда мы передаем целый class как аргумент, и TS понимает
// Используем instanceof

class myResponse {
  header: string = "message";
  message: string = "message";
}

class myError {
  header: string = "error";
  error: string = "message";
}

function handle(res: myResponse | myError) {
  if (res instanceof myResponse) {
    return {
      info: res.message,
    };
  }
  return {
    info: res.error,
  };
}

// Передаем вообще неведому зверушку
// Используем новый тип
// используем type

type AlertTypes = "success" | "danger" | "warning";

function setAlert(type: AlertTypes) {
  //....
}

setAlert("warning");
// setAlert('default') - не будет работать



// Boolean versus !! Operator

function use(payload: { value: string }) {
  // Do something with payload
}

function response_from_api() {
  return { value: "response from api" };
}

Boolean(response_from_api()) && use(response_from_api());
!!response_from_api() && use(response_from_api());
