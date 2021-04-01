// Нужны чтобы мы не передали в функцию то, чего там быть не должно
// /то ситуации, когда мы четко определяем какие типы пападают в функцию (точнее несколько) и как они должны обрабатываться
// Используем typeof

function getPassword(password: number | string) {
    if (typeof password === "number") {
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

