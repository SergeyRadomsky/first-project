// Задача 2
/*let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
// console.log(typeof());
let newArr = []

const arrr = (element) => {
if (typeof element === 'number') {
newArr.push(element)
} else {
for (let elem of element) {
arrr(elem)
}
}
}

for (let element of arr) {
arrr(element)
};

console.log(newArr);*/

/*let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

let newArr = []
const makeArr = (element) => {
      if (typeof element ===  "number") newArr.push(element)
      else for (let elementElement of element) makeArr(elementElement)
  }
for (let element of arr) {
    makeArr(element)
}
console.log(newArr)*/

/*let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
let newArr = []
const recurse = (element) => {
  if ((typeof element) === "number") newArr.push(element)
  else for (let elementElement of element) {
      recurse(elementElement)
  }
}
for (let element of arr) {
    recurse(element)
}
console.log(newArr)*/

/*let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

let newArr = []

const recurse = (elements) => {
  if (typeof (elements) === "number") newArr.push(elements)
    else for (let elementsOfElements of elements) {
      recurse(elementsOfElements)
  }
}
for (let elements of arr) {
    recurse(elements)
}
console.log(newArr)*/

/*let arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

let newArr = []
const recurse = (elements) => {
  if (typeof (elements) === "number") newArr.push(elements)
  else for (let elementOfElements of elements) recurse(elementOfElements)
}

for (let elements of arr) {
    recurse(elements)
}

console.log(newArr)*/


/*numInput = prompt("введите число от 0 до 100 000", "0")
const renameToString = (numInput) => {
    if (numInput < 0 || numInput > 100000) console.log("не подходящее число")
    else {
        let arrayOfNumInput = [...numInput].reverse()
        let arrayOfWords = []
        // console.log(arrayOfNumInput)
            if (arrayOfNumInput.length === 1)
                if ( +arrayOfNumInput[0] === 1) {arrayOfWords.push("один")
        console.log(arrayOfWords)}
                else return
            // if (arrayOfNumInput.length === 1) console.log(arrayOfNumInput)
            //     if (arrayOfNumInput.slice(-1)) console.log(arrayOfNumInput.slice(-1))
        // else console.log("length not 1")

    }
    // else if (numInput.length) console.log(numInput.length)
    // else if (numInput.length > 2) console.log("не меньше 10")
    // else if (numInput.length > 2) console.log("не меньше 10")
    // else if (numInput.length > 2) console.log("не меньше 10")
    // else if (numInput.length > 2) console.log("не меньше 10")
    // else if (numInput.length > 2) console.log("не меньше 10")
}

renameToString(numInput)*/











// ПОПЫТКА ДВА, нужен цикл for где зависимо от длины получаемого массива будут подключаться switch

// numInput = prompt("введите число от 0 до 100 000", "0")
// const renameToString = (numInput) => {
//     if (numInput < 0 || numInput > 100000) console.log("не подходящее число")
//     else {
//         let arrayOfNumInput = [...numInput].reverse()
//         let arrayOfWords = []
//         // console.log(arrayOfNumInput)
//             if (arrayOfNumInput.length === 1) {
//                 switch (+arrayOfNumInput[0]) {
//                     case 1:
//                         arrayOfWords.push("один")
//                         console.log(arrayOfWords);
//                         break;
//                     case 2:
//                         arrayOfWords.push("два")
//                         console.log(arrayOfWords);
//                         break;
//                     case 3:
//                         arrayOfWords.push("три")
//                         console.log(arrayOfWords);
//                         break;
//                     case 4:
//                         arrayOfWords.push("четыре")
//                         console.log(arrayOfWords);
//                         break;
//                     case 5:
//                         arrayOfWords.push("пять")
//                         console.log(arrayOfWords);
//                         break;
//                     case 6:
//                         arrayOfWords.push("шесть")
//                         console.log(arrayOfWords);
//                         break;
//                     case 7:
//                         arrayOfWords.push("семь")
//                         console.log(arrayOfWords);
//                         break;
//                     case 8:
//                         arrayOfWords.push("восемь")
//                         console.log(arrayOfWords);
//                         break;
//                     case 9:
//                         arrayOfWords.push("девять")
//                         console.log(arrayOfWords);
//                         break;
//                     case 0:
//                         arrayOfWords.push("")
//                         console.log(arrayOfWords);
//                         break;
//                     default:
//                         console.log("Нет таких значений");
//                         console.log(arrayOfWords)
//                 }
//             }
//              else if (arrayOfNumInput.length === 2) {
//                 for (let arrayOfWord of arrayOfWords) {
//
//                 }
//                 switch (+arrayOfNumInput[i]) {
//                     case 1:
//                         arrayOfWords.push("один")
//                         console.log(arrayOfWords);
//                         break;
//                     case 2:
//                         arrayOfWords.push("два")
//                         console.log(arrayOfWords);
//                         break;
//                     case 3:
//                         arrayOfWords.push("три")
//                         console.log(arrayOfWords);
//                         break;
//                     case 4:
//                         arrayOfWords.push("четыре")
//                         console.log(arrayOfWords);
//                         break;
//                     case 5:
//                         arrayOfWords.push("пять")
//                         console.log(arrayOfWords);
//                         break;
//                     case 6:
//                         arrayOfWords.push("шесть")
//                         console.log(arrayOfWords);
//                         break;
//                     case 7:
//                         arrayOfWords.push("семь")
//                         console.log(arrayOfWords);
//                         break;
//                     case 8:
//                         arrayOfWords.push("восемь")
//                         console.log(arrayOfWords);
//                         break;
//                     case 9:
//                         arrayOfWords.push("девять")
//                         console.log(arrayOfWords);
//                         break;
//                     case 0:
//                         arrayOfWords.push("")
//                         console.log(arrayOfWords);
//                         break;
//                     default:
//                         console.log("Нет таких значений");
//                         console.log(arrayOfWords)
//                 }
//             }
//             //     else return
//             // if (arrayOfNumInput.length === 1) console.log(arrayOfNumInput)
//             //     if (arrayOfNumInput.slice(-1)) console.log(arrayOfNumInput.slice(-1))
//         // else console.log("length not 1")
//     }
// }
//
// renameToString(numInput)




// Здесь реализовал вывод последнего иднекса элемента __2

// numInput = prompt("введите число от 0 до 100 000", "0")
// const renameToString = (numInput) => {
//     if (numInput < 0 || numInput > 100000) console.log("не подходящее число")
//     else {
//         let arrayOfNumInput = [...numInput].reverse()
//         let arrayOfWords = [] // ["три тысячи" , "сто", "двадцать", "два"]
//
//         let lastIndex = 0;
//         const findLastIndex = () => {
//             while(lastIndex < arrayOfNumInput.length) {
//                 lastIndex++
//             }
//             return lastIndex
//         }
//         console.log(arrayOfNumInput)
// /*        if (findLastIndex() === 1) {
//
//         }*/
//     }
// }
//
// renameToString((numInput))


// Здесь смотря какой последний индекс будут запускаться switch последовательно для каждого элемента __3
// numInput = prompt("введите число от 0 до 100 000", "0")
// const renameToString = (numInput) => {
//     if (numInput < 0 || numInput > 100000) console.log("не подходящее число")
//     else {
//         let arrayOfNumInput = [...numInput].reverse()
//         let arrayOfWords = [] // ["три тысячи" , "сто", "двадцать", "два"]
//
//         let lastIndex = 0;
//         const findLastIndex = () => {
//             while(lastIndex < arrayOfNumInput.length) {
//                 lastIndex++
//             }
//             return --lastIndex
//         }
//         findLastIndex()
//         // console.log(typeof(findLastIndex()))
//
//         if (findLastIndex() === 3) {
//             arrayOfWords.push(+arrayOfNumInput[findLastIndex()])
//             console.log(arrayOfWords)
//         }
//         console.log("false")
//         // console.log((findLastIndex()))
//         // console.log(arrayOfNumInput)
// /*        if (findLastIndex() === 1) {
//
//         }*/
//     }
// }
//
// renameToString((numInput))



// Здесь смотря какой последний индекс будут запускаться switch последовательно для каждого элемента __3
/*numInput = prompt("введите число от 0 до 100 000", "0")
const renameToString = (numInput) => {
    if (numInput < 0 || numInput > 100000) console.log("не подходящее число")
    else {
        let arrayOfNumInput = [...numInput].reverse()
        let arrayOfWords = [] // ["три тысячи" , "сто", "двадцать", "два"]

        let lastIndex = 0;
        const findLastIndex = () => {
            while(lastIndex < arrayOfNumInput.length) {
                lastIndex++
            }
            return lastIndex
        }
        lastIndex = findLastIndex()

        if (lastIndex === 3) {
            console.log(arrayOfNumInput)                           // это массив с правильными значениями внутри
            console.log(lastIndex)                           // это массив с правильными значениями внутри
            console.log(typeof (arrayOfNumInput[lastIndex]))       // это undefined
            console.log(typeof (+arrayOfNumInput[lastIndex]))      // это number
            if (arrayOfNumInput[0] === 1) {
            arrayOfWords.push("один") }
            console.log(arrayOfWords[arrayOfNumInput[0]])                              // это видит массив но внутри undefined

            console.log(arrayOfWords)                              // это видит массив но внутри undefined
            console.log(arrayOfWords[lastIndex-1])
            console.log(arrayOfWords[lastIndex-2])
            console.log(arrayOfWords)
            console.log(typeof (arrayOfWords[3]))
            console.log(arrayOfNumInput[lastIndex - 1] + " вывод элемента где индекс это lastIndex")
        }
        console.log("false")
    }
    const forLastIndex1 = (lastIndex) => {

    }
}

renameToString((numInput))*/


const in10 =  ['', 'один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять ']
const in20 = ['десять ', 'одиннадцать', 'двенадцать ', 'тринадцать', 'четырнадцать', 'пятнадцать ', 'шестанадцать ','семнадцать ', 'восемнадцать ', 'девятнадцать ']
const in100 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
const in1000 = ['', 'сто', 'двести', 'тристо', 'четыресто', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
const in10000 = ['', 'тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
const in100000 = ['', 'десять тысяч', 'двадцать тысяч', 'тридцать тысяч', 'сорок тысяч', 'пятьдесят тысяч', 'шестьдесят тысяч', 'семьдесят тысяч', 'восемьдесят тысяч', 'девяносто тысяч']
const last100000 = ['сто тысяч']


numInput = prompt("введите число от 0 до 100 000", "0")
arrOf100 = []
arrOf1000 = []

const renameToString()
/* const renameToString = (numInput) => {
    if (numInput < 0 || numInput > 100000) {
        console.log("не подходящее число")
    }
    else if (numInput === "0") {console.log("нуль")}
    else {
        console.log(numInput)
        let arrayOfNumInput = [...numInput].reverse()
        let arrayOfWords = [] // ["три тысячи" , "сто", "двадцать", "два"]
                
        
    }
}
renameToString(numInput) */
