/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = [];
    let k = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] != ',') {
            k = k * 10 + parseInt(data[i], 10);
        } else {
            arr.push(k);
            k = 0;
        }
    }
    if (k != 0) arr.push(k);
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            str += ',';
        }
        str += arr[i];
    }
    return str;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let result = data.filter(function (n) {
        return n <= 100;
    });
    return result;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let result = [];
    for (let i = 0; i < 5; i++) {
        result = result.concat(array1[i]);
        result = result.concat(array2[i]);
    }
    return result;
}
