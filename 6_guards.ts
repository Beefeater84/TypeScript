// Нужны чтобы мы не передали в функцию то, чего там быть не должно
// это ситуации, когда мы четко определяем какие типы пападают в функцию (точнее несколько) и как они должны обрабатываться

// Используем typeof


function isNumber(val: number | string): val is number {
    // Получается что функция вернет нам boolean, но TS понимает, что мы проверяем тип
    // и если мы возвращаем true, то это значит, что val - это number
    return typeof val === "number"
}
function getPassword(password: number | string) {
    if (isNumber(password)) {
        return password.toFixed(0)
    }
    return password.trim()
}

// Ситуация, когда мы передаем целый class как аргумент, и TS понимает
// Используем instanceof

class myResponse {
    header: string = 'message'
    message: string = 'message'
}

class myError {
    header: string = 'error'
    error: string = 'message'
}

function handle(res: myResponse | myError) {
    if (res instanceof myResponse) {
        return {
            info: res.message
        }
    }
    return {
     info: res.error
    }
}

// Передаем вообще неведому зверушку
// Используем новый тип
// используем type

type AlertTypes = 'success' | 'danger' | 'warning'

function setAlert(type: AlertTypes){
    //....
}

setAlert('warning')
// setAlert('default') - не будет работать





