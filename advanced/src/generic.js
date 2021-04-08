// Две равнозначные записи
// const car: string[] = ['Ford', 'Honda']
// const car2: Array<string> = ['Ford', 'Honda']
// Нам надо дать понять, что возвращает промис (строку, число и тд)
// 2 равнозначные записи:
// const promise: Promise<string> = new Promise()
// const promise = new Promise<string>()
var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('Result');
    }, 2000);
});
promise.then(function (data) {
    console.log(data.trim());
});
//
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
var me = mergeObjects({ name: 'Tony' }, { age: 36 });
console.log(me);
