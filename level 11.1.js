const arr = [98, 67, 42, 0, 1, 3, 0, 0];

function CountNumberElements() {
    let even = 0;
    let odd = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log("четных элементов: ", even);
    console.log("нечетных элементов: ", odd);
    console.log("нулей: ", zero);
}

CountNumberElements()