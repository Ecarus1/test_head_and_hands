const max = 30;                                             //максимальное значение рандомного числа

document.getElementById('go').onclick = function() {
    let n = document.getElementById('amount').value;        //колличество массивов
    let mas = Array();
    let masLength = Array();
    if ((n % 1 == 0) && (n > 0))
    {
        masLength = getRandomLength(n);                     //вызываем функцию генерации рандомной (уникальной) длинны массива

        for (let i = 0; i < n; i++)
        {
            mas[i] = Array();
            for (let j = 0; j < masLength[i]; j++)
            {
                mas[i][j] = getRandomInt();                 //вставляем рандомное значение в ячейку
            }
        }
        console.log(masLength);                             //выводим длинну массива 
        console.log(mas.join('\n'));                        //выводим все массиввы
        console.log(mas.length);                            //колличество массивов
        alert("Не отсортированные массивы \n" + mas.join(' Конец\n')); 
        mas = getSortMas(mas);                              //получаем отсортированные массивы
        alert("Отсортированные массивы \n" + mas.join(' Конец\n'));                              //выводим все отсортированные массивы
    }
}

function getRandomInt () {                                  //функция генерации рандомного значение для ячейки в массиве
    return Math.ceil(Math.random() * max);
}

function getRandomLength (n) {                              //функция для генерации рандомной длинны массива без повторений
    let nums = Array();
    let numsLen = n;
    let maxNum = n * 2;
    let num;
    while (nums.length < numsLen) 
    {
        num = Math.ceil(Math.random() * maxNum) + 1;
        if (nums.indexOf(num) === -1) 
        {
            nums.push(num);
        }
    }
    return nums;
}

function getSortMas (mas) {                                 //функция сортировки двумерного массива (методом пузырька)
    let mas_temp = Array();

    for(let d = 0; d < mas.length; d++)
    {
        if ((d + 1) % 2 == 0)
        {
            mas_temp = mas[d];
            for (let i = 0; i < mas[d].length; i++)
            {
                for (let j = 0; j < mas[d].length - i; j++)
                {
                    if (mas_temp[j] > mas_temp[j + 1])
                    {
                        let temp = mas_temp[j];
                        mas_temp[j] = mas_temp[j + 1];
                        mas_temp[j + 1] = temp;
                    }
                }
            }
            mas[d] = mas_temp;
        }
        else
        {
            mas_temp = mas[d];
            for (let i = 0; i < mas[d].length; i++)
            {
                for (let j = 0; j < mas[d].length - i; j++)
                {
                    if (mas_temp[j] < mas_temp[j + 1])
                    {
                        let temp = mas_temp[j];
                        mas_temp[j] = mas_temp[j + 1];
                        mas_temp[j + 1] = temp;
                    }
                }
            }
            mas[d] = mas_temp;
        }
    }
    return mas;
}