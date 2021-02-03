function createAdder(num1) {
    return function addA(num2) {
        return num1 + num2
    }
}
let add =  createAdder(2);
console.log(`Результат: ${add(5)}`)