'use strict'

// const arr = [1,2,3]
// const cb = (item) => item + 2
// let arrNew = []
// function qname(arr) {
//   arr.forEach((item) => arrNew.push(cb(item)))
// }
// qname(arr)

// console.log(arrNew);


/* const arr = [1,2,3]
const cb = (item) => item + 2
function qname(arr) {
  arr.forEach((item, index) => arr[index] = cb(item))
}
qname(arr)

console.log(arr); */























/* const task1 = function(number, degree) {
  if (degree === 1) {
    return number
  }
    return  number * task1(number, degree - 1)
}  


console.log(task1(2,4))
console.log(task1(4,2)) */  

/* // короткая запись
 let task1 = function(a ,b) {
  if (b == 1) return a
  else return a * task1(a , b -1)
}
console.log(task1(2,2)) */

//ЗАДАЧА 2
/*  let arr = [1, {name: '2'}, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
let newArr = []

const arrr = (element) => {
  if (Array.isArray(element)) {
  for (let elem of element) {
    arrr(elem)
  }
  } else {
    newArr.push(element)
  }
}

  arrr(arr)

console.log(newArr); */

// // ЗАДАЧА 3
/* const in10 =  ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
const in20 = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестанадцать','семнадцать', 'восемнадцать', 'девятнадцать']
const in100 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
const in1000 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
const in10000 = ['', 'тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
const in100000 = ['', 'десять тысяч', 'двадцать тысяч', 'тридцать тысяч', 'сорок тысяч', 'пятьдесят тысяч', 'шестьдесят тысяч', 'семьдесят тысяч', 'восемьдесят тысяч', 'девяносто тысяч']
const last100000 = ['сто тысяч']
// const num234 = ['две' , 'три' , "ч"]
// prompt("введите число от 0 до 100 000", "0")
let numInput = 94393
let arrBefore1000 = []
let arrOfWordsBefore1000 = []
let arrAfter1000 = []
let arrOfWordsAfter1000 = []
let num100 = 0
let num1000 = 0

let findFuncAfter1000 = (arrNum) => {
  if (arrNum.length === 3) {
    console.log(arrNum);
    let a = in1000[arrNum[0]]
    let b = in100[arrNum[1]]
    let c = in10[arrNum[2]]
    arrOfWordsAfter1000.push(a)
    if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
    && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
        b = (in20[arrNum[2]]);
      arrOfWordsAfter1000.push(b)
    }
    else {
    arrOfWordsAfter1000.push(b)
    arrOfWordsAfter1000.push(c)
    }
  }
  else if (arrNum.length === 2) {
    let a = in100[arrNum[0]]
    let b = in10[arrNum[1]]
    
    if (+(String(arrNum[0]) + String(arrNum[1])) <= 19 && (+(String(arrNum[0]) + String(arrNum[1])) > 9)) {
      b = (in20[arrNum[1]] + " тысяч");
      console.log(b);
      arrOfWordsAfter1000.push(b)
      console.log(arrOfWordsAfter1000);
    }
    else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 0)) {
      b = ( in100[arrNum[0]] + in100[arrNum[1]] + " тысяч")
      arrOfWordsAfter1000.push(b)
    }
    else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 1)) {
      b = ( in100[arrNum[0]] + " одна " + "тысяча")
      arrOfWordsAfter1000.push(b)
    }
    else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 2)) {
      b = ( in100[arrNum[0]] + " две " + "тысячи")
      arrOfWordsAfter1000.push(b)
    }
    else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) > 2) && ((+String(arrNum[1]) <= 4))) {
      b = ( in100[arrNum[0]] + ` ${in10[arrNum[1]]} ` + "тысячи")
      arrOfWordsAfter1000.push(b)
    }
    else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && (((+String(arrNum[1])) > 4)  && ((+String(arrNum[1])) <= 9))) {
      b = ( in100[arrNum[0]] + ` ${in10[arrNum[1]]} ` + "тысяч")
      arrOfWordsAfter1000.push(b)
    }
    else {
      arrOfWordsAfter1000.push(a)
      arrOfWordsAfter1000.push(b)
    }
  }
  else {
    let a = in10000[arrNum[0]]
    arrOfWordsAfter1000.push(a)
  }
}
const remadeToString = (numInput) => {
  if (numInput < 0 || numInput > 100000) {console.log("число не подходит");}
  else {
    if (numInput > 999) {
      num1000 = String(Math.floor((numInput / 1000)))
      arrAfter1000 = [...num1000]

    
      findFuncAfter1000(arrAfter1000)

      num100 = String(Math.floor(numInput - num1000 * 1000))
      arrBefore1000 = [...num100]
      let CopyFindFuncBefore1000 = (arrNum) => {
        if (arrNum.length === 3) {
          let a = in1000[arrNum[0]]
          let b = in100[arrNum[1]]
          let c = in10[arrNum[2]]
          arrOfWordsBefore1000.push(a)
          if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
          && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
            b = (in20[arrNum[2]]);
            arrOfWordsBefore1000.push(b)
          } 
          else {
          arrOfWordsBefore1000.push(b)
          arrOfWordsBefore1000.push(c)
          }
        }
        else if (arrNum.length === 2) {
          let a = in100[arrNum[0]]
          let b = in10[arrNum[1]]
          if (+(String(arrNum[0]) + String(arrNum[1]) ) < 20 
          && +(String(arrNum[0]) + String(arrNum[1]) ) > 9) {
            b = (in20[arrNum[1]]);
            // console.log(b);
            arrOfWordsBefore1000.push(b)
          } 
          else {
            arrOfWordsBefore1000.push(a)
            arrOfWordsBefore1000.push(b)
          }
        }
        else {
          let a = in10[arrNum[0]]
          arrOfWordsBefore1000.push(a)
        }
      }
      CopyFindFuncBefore1000(arrBefore1000)
    } 
    else {
      num100 = String(Math.floor(numInput - num1000 * 1000))
      arrBefore1000 = [...num100]
      let CopyFindFuncBefore1000 = (arrNum) => {
        if (arrNum.length === 3) {
          console.log(arrNum);
          let a = in1000[arrNum[0]]
          let b = in100[arrNum[1]]
          let c = in10[arrNum[2]]
          arrOfWordsBefore1000.push(a)
          if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
          && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
            b = (in20[arrNum[2]]);
            console.log(arrNum[0]);
            if (arrNum[0] / 10 === 1) {
              console.log(arrNum[0]);
            console.log("fuck");
            }
            arrOfWordsBefore1000.push(b)
          } 
          else {
          arrOfWordsBefore1000.push(b)
          arrOfWordsBefore1000.push(c)
          }
        }
        else if (arrNum.length === 2) {
          let a = in100[arrNum[0]]
          let b = in10[arrNum[1]]
          if (+(String(arrNum[0]) + String(arrNum[1]) ) < 20 
          && +(String(arrNum[0]) + String(arrNum[1]) ) > 9) {
            b = (in20[arrNum[1]]);
            console.log(b);
            arrOfWordsBefore1000.push(b)
          } 
          else {
            arrOfWordsBefore1000.push(a)
            arrOfWordsBefore1000.push(b)
          }
        }
        else {
          let a = in10[arrNum[0]]
          arrOfWordsBefore1000.push(a)
        }
      console.log(arrNum.length);
      }
      CopyFindFuncBefore1000(arrBefore1000)
    }
    let endArr = [...arrOfWordsAfter1000, ...arrOfWordsBefore1000]; 
    // endArr = endArr.
     console.log(endArr);
    console.log(arrBefore1000);
    console.log(arrBefore1000 + " это массив arrBefore1000");
    console.log(arrAfter1000);
    console.log(arrAfter1000 + " это массив arrAfter1000");
    console.log(arrOfWordsBefore1000 + " массив куда будем складывать слова до тысячи");
    console.log(arrOfWordsAfter1000 + " массив куда будем складывать слова тысяч"); */
//     console.log(endArr.join(" "));
//   }
// }

// remadeToString(2019) */

// 2.4 (1)
/* let admin, name
name = "Джон"
admin = name
alert(admin) */

// 2.4 (2)
/* let planetEarth, currentUser;*/

// 2.4 (3)
/* const BIRTHDAY;
let age; */

// 2.5 (1)
/* let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello ${name}
alert( `hello ${name}` ); // hello Ilya */

// 2.6 (1)
/* let name = prompt("привет, как тебя зовут", "");
alert(name);
 */

// 2.7 (1)
/* no tasks */

// 2.8 (1)
/* let a = 1, b = 1;
let c = ++a; //  2
let d = b++; // 1 */

// 2.8 (2)
/* let a = 2;
let x = 1 + (a *= 2); // 5 */

// 2.8 (3)
/* "" + 1 + 0 // 1       +
"" - 1 + 0 // null    - (-1)
true + false // true  - (1)
6 / "3" // 2          +
"2" * "3" // 6        +
4 + 5 + "px" // 9px   +
"$" + 4 + 5 // $45    +
"4" - 2 // 2          +
"4px" - 2 // NaN      +
"  -9  " + 5 // -9 5  +
"  -9  " - 5 // -14   +
null + 1 // NaN       - (1)
undefined + 1 // NaN  +
" \t \n" - 2 // Nan   - (-2)*/

// 2.8 (4)
/* let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 12 */

// 2.9 (1)
/* 5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //false            - (посимвольное 2 > 1)
undefined == null //true
undefined === null //false
null == "\n0\n" //true        - (null == undefined) true и все
null === +"\n0\n" //false */

// 2.10 (1)
/* if ("0") {
  alert( 'Привет' ); // да, 0 это все-же какое-то значение
} */

// 2.10 (2)
/* let answer = prompt('Какое "официальное" название Javascript?', "");
if (answer == "ECMAScript") {
  console.log("Верно!")
} else {
  console.log("Не верно!")  
} */

// 2.10 (3)
/* let value = prompt("Input any number", "")
if (value > 0) {
  console.log(1)
} else if (value < 0) {
  console.log(-1)
} else {
  console.log(0)
} */

// 2.10 (4)
/* let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

let result;
a + b < 4 ? result = 'Мало' : result = 'Много'
*/

// 2.10 (5)
/* if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} 

let message;
let login = prompt("login","")

 login == 'Сотрудник' ? message = 'hello' :
 login == 'Директор' ? message = 'good evening' :
 login == '' ? message = 'no login' :
 message = '';
 console.log(message) */

// 2.11 (1)
/* alert( null || 2 || undefined ); // 2
 */

// 2.11 (2)
/* alert( alert(1) || 2 || alert(3) ); // возвращает первое истинное
 */

// 2.11 (3)
/* alert( 1 && null && 2 ); //null
 */

// 2.11 (4)
/* alert( alert(1) && alert(2) );
 */

// 2.11 (5)
/* alert( null || 2 && 3 || 4 ); // 3
 */

// 2.11 (6)
/* let age = prompt
if (age >= 14 && age <= 90) {} */

// 2.11 (7)
/* if (!(age >= 14 && age <= 90)) {}
if (age < 14 || age > 90) {} */

//2.11 (8)
/* if (-1 || 0) alert( 'first' ); // внимение клогиченскому конткесту, сработают 1 и 3
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
 */

//2.11 (9)
/* let login = prompt("Кто там", "")
if ( login == null || login == " ") {
  console.log("отменено")
} else if (login == "Админ") {
  let pass = prompt("Введите пароль", "")
   {
    if (login == null) {
      console.log("отменено")
    }
    else if (pass == "Я Главный" || pass == " ") {
      console.log("Здравствуйте!")
    }
    else {
      console.log("Неверный пароль")
    }
  }
} else {
  console.log("Я вас не знаю")
} */

// 2.12 (нет задач оператор нулевого слияния)

// 2.13 (1)
/* let i = 3;

while (i) {
  alert( i-- );
} // 1 */

// 2.13 (2)
/* let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4 
  let i = 0;
while (i++ < 5) alert( i ); // думал, что так 0 1 2 3 4, но 1 2 3 4 5
 */

//2.14 (3)
/* for( let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i)
  } else {
    continue
  }
} */

//2.14 (4)
/* for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
let i = 0
while (i< 3) {
  alert(`number ${i}!` );
  i++
} */

//2.14 (5)
/* let numbwer = 0
while (numbwer <= 100 || !numbwer) {
   numbwer = prompt("Введите число > 100", "")
}
 // долго делал  */

/*  let num;

 do {
   num = prompt("Введите число больше 100?", 0);
 } while (num <= 100 && num); */

// 2.14 (6)
// let n = 10
/* while (i < n && (n % i == 0)) {
  i++
  console.log(i)
} 
label:
for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    console.log(j)
    // console.log(i)
    if (i % j == 0) continue label
  }
}
*/

// 2.14 (1) SWITCH
/* let browser = prompt('rtnrt','')
if (browser === 'Edge') alert('Edge')
else if ("Crome" || "firefox" || "safari" || "opera") alert('another')
else alert('hope page good')
 */

// 2.14 (2) SWITCH
/* let number = +prompt('input a number',"")
switch(number) {
  case 0:
    alert("0")

  case 1:
    alert('1')

  case 2:
  case 3:
    alert('2 or 3');
} */

// 2.15 (1) FUNCTION
/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
} */
/* 
function checkAge(age) {
return age > 18 ? true : confirm("accecs?")
}
checkAge(1) 
  return (age > 18) ||  console.log(false)
}
checkAge(19)  */

// 2.15 (2)
// function min(a, b) {
  // if (a < b) return a
  // else return b
  // another
  // return a < b ? a : b
// }
// console.log(min(2,5))

// 2.15 (3)
/* function pow(x , n) {
  if (n >= 1) {
  return x ** n
  }
  false
}
console.log(pow(2,3)) */

// 2.16 (1) FUNCTION EXPRESSION

// 2.17 (1)
/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

/*  let ask = (question, yes, no) => {
  if (confirm(question)) {
    yes()
  } else no()
 }

 ask("yes or no",
 function() {console.log("yes")},
 function() {console.log("no")},
 ) */

// 2.18 ()
/* 
 + Введение 1.1-1.4 <- прочитать в ознакомительном порядке
 + Основы JavaScript 2.1-2.3 <- прочитать в ознакомительном порядке
 + Основы JavaScript 2.4-2.18 <- изучить
 + Качество кода 3.1-3.6 <- прочитать в ознакомительном порядке
 + Объекты: основы 4.1-4.6 <- изучить
 Объекты: основы 4.7-4.8 <- прочитать в ознакомительном порядке
 Типы данных 5.1-5.6 <- изучить
 Типы данных 5.7-5.8 <- прочитать в ознакомительном порядке
 Типы данных 5.9-5.12 <- изучить
 Продвинутая работа с функциями 6.1-6.11 <- изучить
 Свойства объекта, их конфигурация 7.1-7.2 <- прочитать в ознакомительном порядке
 Прототипы, наследование 8.1-8.4 <- прочитать в ознакомительном порядке
 Классы 9.1-9.7 <- изучить
 Обработка ошибок 10.1-10.2 <- изучить
 Промисы, async/await 11.1-11.8 <- изучить
 Генераторы, продвинутая итерация 12.1-12.2 <- прочитать в ознакомительном порядке
 Модули 13.1-13.3 <- изучить
 Разное 14.1-14.6 <- прочитать в ознакомительном порядке */


// 4.1 (1) OBJECTS
/* let user = {}
user.name = "John"
user.surname = "Smith"
console.log(user)
user.name = "Pete"
console.log(user)
delete user.name
console.log(user) */

// 4.1 (2)
/* let isEmpty = function(obj) {
  if (let value in obj) {
    console.log(false)
  }
  else true
}
 */

// 4.1 (3)
/* const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete"; //да, изменение свойства обекта-перменной а не самой переменной
 */

// 4.1 (4)
/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}
let sum = 0
function isEmpty(obj) {
  for (let keys in obj) {
      sum += obj[keys]
  }
  console.log(sum)
}
isEmpty(salaries) */

// 4.1 (5)
/* let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2
    }
    console.log(obj[key])
  }
}
multiplyNumeric(menu) */

// 4.4 (1) THIS
/* function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
alert( user.ref.name ); */

// 4.4 (2)
/* let calculator = {
  read() {
    this.a = +prompt("num a", 0)
    this.b = +prompt("num b", 0)
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul()); */

// 4.4 (3)
/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep(); */
/* чтобы так работать с методами,
они должны возвращать что-то с чем можно работать. Возвращать каждый раз наш объект
поле его обновления
 */

// 4.5 (1) конструктор NEW
/* Функция начинается со слова new */
/* обычно модифицирует this */
/* возвращает значение this */
/* именуются с большой буквы */
/* следует вызывать только с помощью new, 
   тогда this пустой в начале и заполненый в конце */

/* let c = {}
   function A() { return c }
   function B() { return c }
   
   let a = new A();
   let b = new B();
   
   alert( a == b ); // true? сработало только с объектом 
 */

// 4.5 (2)

/* function Calculator() {

  this.read = function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },

  this.sum = function() {
    return this.a + this.b
    console.log(this)
  },

  this.mul = function() {
    return this.a * this.b
  }
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul()); */

// 4.5 (3)
/* function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +(prompt("new value",0));
  };
}

let accumulator = new Accumulator(1) 
  accumulator.read();
  accumulator.read();
  accumulator.read();
  alert(accumulator.value); */
/* 
  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value); */

// 4.6 (1) опциональная цепочка
/* let user = {
  w: {
    qwe: 5,
    ewq: 9,
  },
  a: null,
  b: 3,
}

console.log(user.a?.wasd)
 */

// 5.1 (1) МЕТОДЫ ПРИМИТИВОВ
// существует 7 примитивным типов:
//  symbol, string, number,
//  boolean, null, undefined, bigint
// они не хранят доп. навешанные свойства,
// только испзользуют доступные им методы

// ЧИСЛА
// 1e-3 or 3 - укорачивает запись 0.002 or 2000
// 123456..toString(2);  - перевод числа в двоичную систему счисления
// Различные математические методы:
  // Math.floor - окгругление в меньшую
  // Math.ceil - округление в большую 
  // Math.round - до ближайшего целого 
  // Math.trunc - удаление дробной, без округления
  // toFixed(1) - округление числа до 1 знака после запятой (строка как итог)
  // пустая строка это 0 для всех числовых функций
  // parseInt/parseFloat - поиск в строке целых/дробных значение но если спереди
  // буква то не прочитает(a123)
  // random
  // pow(2, 10) - 2 в 10 степени
  // max,min

// 5.2 (1) 
/* let a = +prompt("введите число", "");
let b = +prompt("введите число", "");
alert((a + b)) */

//5.2 (2)
// alert( 1.35.toFixed(1) ); // 1.4
// alert( 6.35.toFixed(1) ); // 6.3
// alert(Math.round(6.35 * 10 / 10))

// 5.2 (3)
/* Function ReadNumber() {...}
let funcT = NEW ReadNumber() {
  let number
  do {
  number = +prompt("input value", "")
  } while (!isFinite(number))
  if (number === null || number === '') return null;
  console.log(number)
}
readNumber() */


// 5.2 (4)
// Значение i не будет равно ровно 10 из-за неточностей JS

//5.2 (5-6)
/* let randomNumber = function random(min, max) {
  let numFloat = Math.random()
  function addFive(numFloat) {
  }
  return(Math.trunc(numFloat * 100 / 20))
}
console.log(randomNumber(min, max)) */


// VAR  не видно если он используется в функции.................

// ???
// for(let i = 0; i < 10; i++) setTimeout(() => console.log(i), 1000)
// for(let i = 0; i < 10; i++) setTimeout(() => console.log(i), 1000)
// for(var i = 0; i < 10; i++) console.log(i)

// 5.3 (1) СТРОКИ
/* let a = function ucFirst(str) {
  
  let a = str[0].toUpperCase() + str.slice(1)
  return(a)
}
console.log(a("вася")) */

// 5.3 (2)
/* function checkAge(str) {
  let lowerCase = str.toLowerCase();
  // return lowerCase = str.includes('viagra') || str.includes('xxx')
  return lowerCase = str.
}
 */

// 5.3 (3)

/* function truncate(str, maxlength) {
  return str.length > maxlength ? (str.slice(0, maxlength - 1) + "...") : (str)  
}

console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 2)
); */

// 5.3 (4)
/*
function extractCurrencyValue(str) {
  return(str.slice(1))
}
console.log(extractCurrencyValue("$124124")); */



// 5.4 МАССИВЫ
/* let arr = new Array();
let arrr = [1,2,{name: "qwerty", age: 29}, function r(){console.log("hello");}];
 */// alert(arrr[3]())
// alert(arrr.at(2))

// Массив это объект, копируется по ссылке
// доп.методы упорядоченная коллекция 

// push добавляет элемент в конец строки
// unshift добавляет элемент в начало массива
// могут добавлять сразу несколько

// pop удалят последний элемент
// shift удаление первого элемента и сдвиг

// 5.4 (1)
/* let styles = ["Джаз", "Блюз"]
styles.push("Рок-н-ролл")
function findCenter() {
  styles[Math.round((styles.length - 1)/ 2)] = "Классика"
}
findCenter()
console.log(styles); */

// 5.4 (2)
// Контекст THIS массива это он сам как объект. 
// выведет все его элементы

// 5.4 (3)
/* let arr = []
function sunInput() {
  let a = prompt("new el for arr" , "")
  if (typeof(a) === "number") {
    arr.push(a)
    sunInput()
  } else (typeof(a) != "number" || a === null || a == '') break;}
    let sum = 0;
  for (let key of arr) {
    sum += key
  }
  return sum
}
alert(sunInput())
 */
/* function sumInput() {
let arr = []
while (1) {
  let el = +prompt("Input new elements for arr","0") 
    if (typeof(el) != "number" || el === null || el == '') {
      break;
    } 
    arr.push(el)
  }
    let sum = 0
    for (let key of arr) {
      sum += key
    }
    return sum
}
alert(sumInput()) */

// 5.4 (4)
/* function getMaxSubSum(arr) {
  let sum = 0
  let maxSum = 0
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == (arr[i+1]-1)) || !(arr[i+1])) {
      console.log(`arr = ${arr[i]}`);
      sum += arr[i]
      console.log(`sum = ${sum}`);
      if(sum > maxSum) {
        maxSum = sum
      }
    }
    else if ((arr[i] != (arr[i+1]-1)) ) {
      sum = arr[i]
      console.log(`sum = ${sum}`);
      console.log(`arr = ${arr[i]}`);
    }
    return maxSum;
  }
}
console.log(getMaxSubSum([1, 2, 3, 1, 2, -1])); */


/* function getMaxSubSum(arr) {
  let maxsum = 0
  let sum = 0
  for (let item in arr) {
    sum += arr[item]                        // почему здесь не срабатыват = item
    maxsum = Math.max(maxsum, sum)
    if (sum < 0) sum = 0
  }
  return maxsum
}
console.log(getMaxSubSum([-1, 2, 3, -9]) ); //5
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) ); //11
console.log(getMaxSubSum([-2, -1, 1, 2]) ); //3
console.log(getMaxSubSum([-1, -2, -3]) ); //0 */

// 5.5 МЕТОДЫ МАССИВОВ

/* splice - добавляет, удаляет, заменяет
  СИНТАКСИС 
  
    удаление: arr.splice(1,1) удалить с 1 элемента 1 элемент

    вставить: arr.splice(1, 0 , "буква") вставить со 2 позиции, 
      ничего не удаляя(0), элемент = "буква"
    
    заменить: arr.splice(1,1, "буква") c элемента 1, удалить 1, вставить заместо
      него элемент = "буква"
 */

/* slice - возвращает новый массив где скопировал из старого (1, 3) 
    с 1 по 3 элемент
    если (1) 1 аргумент, то в новый массив с 1 по последний
 */

/* concat - создает новый, в который копирует или добавляет 
    другие массивы и элменты

    // создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
 */

/* Функция forEach(item, index, arr ) - создает функцию для каждого элемента массива
 */

/* методы поиска в массиве

    arr.indexOf(item, from) ищет item, начиная с 
        индекса from, и возвращает индекс, на котором был найден искомый 
        элемент, в противном случае -1.
    
    arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.

    arr.includes(item, from) – ищет item, начиная с индекса from, и
        возвращает true, если поиск успешен.
 */


/* функция find(f(item, index, array) {...}
      возвращает 1 элемент для которого функция сработала как true
 */

/* функция filter(f(item, index, array) {...}
      Возвращает массив для которого, верно сработала функция
 */

/* Метод map(f(it, ind, arr)) {...}
      создает новый массив из элементов к которым применилась функция
 */



















/*       [1, -2, 15, 2, 0, 8].sort(function(a, b) {
        alert( a + " <> " + b );
        return a - b;
      }); */


      // function compareNumeric(a, b) {
      //   if (a > b)
      //    return 1;

      //   if (a == b)
      //   return 0;

      //   if (a < b)
      //   return -1;
      // }
      
      // let arr = [ 1, 2, 15,4 ];
      
      // arr.sort(compareNumeric);
      
      // alert(arr);  
      
      // 1, 2, 15
       /* есть массив arr = [ 1, 2, 15 ];
        он сортируется функцией сompareNumeric
        которая получает 2 КАКИХ аргумента?
        если первый > b 
        не понимаю как элементы массива подставляются под a, b
       */



/*reduce/reduceRight
  проходит по массиву, запоминает значение от предыдущего действия,
  и продолжает работу уже с ним


синтаксис?

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15
 */



























// arr.reverse() меняет порядок элементов arr на обратный


// split - разбивает полученную строку на массив элементов по разделителю
// arr.split(", ") где разделитель запятая с пробелом удаляется


// join - слепляет массив в строку где запятая с пробелом добавляются
// arr.join(", ")

//


// Array.isArray(arr) //true или false






/* let neww
  neww = str.map((elem) => {
    elem[0].toUpperCase() + str.slice(1);
    return neww
  })
  str = neww
  return str */
// 5.5 (1)
/* function camelize(str) {
  str = (str.split('-'))
  let word
    word = str.forEach(word => {
      word.toUpperCase()
    });
  
  return str
}
*/
// console.log(camelize("list-style-image")) 

/* function camelize(str) {
  return str.split('-').map(
    function(word, index) {return index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    })
    .join('');  

     return str.split("-").map((word, index) => { 
      index === 0 ? word :
      word[0].toUpperCase() + word.slice(1)

      return word;
    }).join('') 
  }
  console.log(camelize("list-style-image"))   */
  
// 5.5 (2)
/* let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
  return arr.filter((items) => (items >= a) && (items <= b))
}
console.log(filterRange([1,2,3,4,5,6,7], 2, 5)); */

//5.5 (3)
/* function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
  
    if (val < a || val > b) {
      arr.splice(i, 1)
      i--
    }
  }
}
let arr = [5,3,8,1] // больше всего мучался, arr должна быть объявлена вне функции
//  чтобы сработал console.log
filterRangeInPlace(arr, 1, 4);
console.log(arr); */

// 5.5 (4)
/* let arr = [5, 2, 1, -10, 8];

/* arr.sort((a,b) => b - a)
 console.log(arr); 



function decrease(arr) {
  return arr.sort(function(a, b) {
    return b - a
  })
}
console.log(decrease(arr)); */


/*{   for (let i = 0; i < arr.length; i++) {
    let elem = 0
    if (arr[i] > elem) {
      elem = arr[i]
    }
  }
 } */
// decrease(arr)
// console.log(decrease(arr)); // 8, 5, 2, 1, -10


/* let arr = [1,2,3,4,5,6]
let arr2 = arr.filter(a => a>2)
console.log(arr2) */

/* let n = "hello"
let q = n.slice(2,4)
console.log(q); */

// 5.6 ПЕРЕБИРАЕМЫЕ ОБЪЕКТЫ
// Symbol Iterator

// 5.7 MAP И SET
/*
map это коллекция ключ значение
может использовать объект как ключ
если объект как ключ, его защищает от удаления
map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

Set – коллекция уникальных значений, так называемое «множество»
 */



// 5.9 Object.keys, values, entries

/* Object.keys(obj) возвращает массив ключей
Object.values(obj) возвращает массив значений
Object.entries(obj) возвращает массив пар ["ключ","значение"]
 */
/* let obj = {
  name: "John",
  age: 30,
}
console.log(Object.entries(obj));
console.log(Object.fromEntries(Object.entries(obj)));
console.log(Object.keys(obj)); */

// 5.9 (1)
/*  let sal = {}
let salaries = {
  "john": 100,
  "Ann": 150,
  "Vital": 300,
  "Oleg": 200,
}
const sumSalaries = (salaries) => {
  let sum = 0
  for(let a of Object.values(salaries)){
  sum += a  
  }
  console.log(sum);
}
sumSalaries(salaries) */
//два решения одно через => 
/*
function sumSalaries(salaries) {
  if (Object.keys(salaries).length == 0) {
  console.log(0)
  }
  else {
    let sum = 0
    for(let name of Object.values(salaries)) {
    sum = sum + name
  }
  console.log(sum);
  }
}
sumSalaries(salaries)
 */
//  sal = Object.fromEntries(Object.entries(salaries).reduce(([key, el],[key, el2]) => [key, el + el2]))

// 5.9 (2)
/* let user = {
  name: 'John',
  age: 30,
  agew: 30,
  ageq: 30,
};

const count = (obj) =>
  Object.keys(obj).length
console.log(count(user));

const count = (obj) =>
  Object.entries(obj).length
console.log(count(user));
 */

// 5.10 ДЕСТРУКТУИРУЮЩЕЕ ПРИСВАИВАНИЕ
// это просто копирование и присвоение

          //  синтаксис для функции :
          /* function({
            incomingProperty: varName = defaultValue
            ...
          }) 
          
          //  синтаксис для объекта :
            let {prop : varName = default, ...rest} = object

          // синтаксис для массива :
            let [item1 = default, item2, ...rest] = array
          */

// let arr = ["Ilya", "Kantor"];

// let [firstName, surname] = arr;            эта строка равна двум нижним

// и surname = arr[1]
// записывает firstName = arr[0]



// 5.10 (1)
//  let user = {
  // name: "John",
  // years: 30
// };

// let {name, years:age, isAdmin:isAdmin = false} = user
// console.log(name);
// console.log(age);
// console.log(isAdmin);  


// 1
/* let name = user.name
console.log(name);
// 2
let age = user.years
console.log(age);
// 3
let isAdmin = user.isAdmin = false
console.log(isAdmin); */

// 5.10 (2)
/* let salaries = {
  "John": 100,
  "Pete": 300,
  "Mavfry": 2580,
  "Marey": 2150,
  "Margy": 2350,
  "Marys": 2850,
  "Marya": 3250,
};

let {John: newJohn = false, Pete: name2, ...qwe} = salaries
console.log(newJohn);
let {Mavfry: q, ...er} = qwe
console.log(q);
console.log(a); */

/* 
let topSalarry = () => {
  let max = 0
  let maxName = null
  for (const [name, salary] of Object.entries(salaries)) {
    if (max <= salary) {
      max = salary
      maxName = name
    }
  }
  console.log(`${max} and ${maxName}`)
}
topSalarry(salaries) */


/* let topSalarry = () => {
  if (Object.keys(salaries).length == 0) {
    console.log(0);
  } else if () {
    
  }
  } */


// 5.11 ОБЪЕКТ Date
/* let date = new Date() // эквивалентно Date.now()
console.log(date);
console.log(date.getFullYear());  //год
console.log(date.getMonth());     //месяц
console.log(date.getDate());      //день месяца
console.log(date.getDay());       //день недели
console.log(date.getTime());       //день недели
console.log(date.getTimezoneOffset() / 60 * -1);       //день недели
console.log(Date.now());
// console.log(date);
let a = 2300-20-4
console.log(new Date(Date.parse(a))) */
//бенмарки замер производительности

//5.11 (1)
/* let a = new Date("2012-2-1 12:12:12")
console.log(a); */

// 5.11 (2)
/* let date = new Date(2014, 0, 3)
let getWeekDay = (date) => {
  let days = ["0", "1", "2", "3", "4", "5", "6", "7"]
  return days[date.getDay()];
}
console.log(getWeekDay(date)) */

// 5.11 (3)
/* let date = new Date(2014, 0, 3)

let getWeekDay = (date) => {
  let days = ["0", "1", "2", "3", "4", "5", "6", "7"]
  return days[date.getDay()];
}
console.log(getWeekDay(date)-1) */

// 5.11 (4)
/* let date = new Date()
// let days = 0
let getDateAgo = (date, days) => {
  date.setDate(date.getDate() - days)
  return date.getDate()
}
console.log(getDateAgo(date, 2)); */

// 5.11 (5)
/* const getLastDayOfMonth = (year, month) => {
  let date = new Date()

  console.log(date);
}
getLastDayOfMonth(2012,1) // 29 */


//6.1 РЕКУРСИЯ


/* function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    console.log(`${x} this is x`);
    console.log(`${n} this is n`);
    return x * pow(x, n - 1);
  }
}

console.log( pow(3, 6) ); // 8 */









// 6.3 ЗАМЫКАНИЯ 

// 
/* let naqme = "John";


naqme = "Pete";


let sayHi =() => alert("Hi, " + naqme);


sayHi(); */

/* function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // */


/* function makeCounter() {

  let count = 0;

  console.log("внешняя count  для функции");
  console.log(count);

  return () => {
    count++
    console.log("внутренняя count для функции");
    console.log(count)
    return count
  };


}

let counter1 = makeCounter();
counter1()
counter1()
counter1()
counter1()
console.log("count2");
let counter2 = makeCounter();
counter2() */

/* let value = "Сюрприз!";

function f() {
  let value = "ближайшее значение";

  function g() {
    return value
  }

  console.log(value)
}
// последнеее размышление области видимости + замыкания
let g = f();
g(); */

/* function func1(a) {

  function func12(b) {
    console.log(a + b);
  }

  return func12;
}

let sumNum = func1(1);
sumNum(2); */

// 6.3 (1)
// 0.1

// 6.3 (2)

/* function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter ); // ? */

// 6.3 (3)
/* let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
  sayHi();
} */

// 6.3 (4)
/* let funcA = (a) => {
  let funcB = (b) => {
    return (a + b)
  }
  return funcB
}
console.log(funcA(1)(2)); */

// 6.3 (5) Фильтрация с помощью функции
/* let arr = [1, 2, 3, 4, 5, 6, 7];

 let inBetween = (a, b) => {
    return (elem) => {return elem >= a && elem <= b
    }
  }
// console.log(arr.filter(inBetween(1,5)));

let inArray = (arr) => {
  return (elem) => {
    return arr.includes(elem)
  }
}
console.log(arr.filter(inArray([1,5,3,8]))); */

//6.3 (6) Сортировать по полю
/* let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
]; */
/* let byField = (nameElemOfObj) => {
    return (a, b) => a[nameElemOfObj] > b[nameElemOfObj] ? 1 : -1
}
console.log(users.sort(byField('name'))) */
// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
// console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));
// по возрасту (Pete, Ann, John)


















































//6.3 (7) army o shooters
/* function makeArmy() {
  let shooters = [];
  let i = 0;

  while (i < 10) {
    // let j = i
    let shooter = function() { // функция shooter
      // return j
      console.log(i); // должна выводить порядковый номер
      return i
    }();
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
console.log(makeArmy());
console.log(army) */

/* function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
    return i
    }();
    shooters.push(shooter);
    i++;
    console.log(i);
  }

  return shooters;
}

let army = makeArmy();
// console.log(army)
console.log('event', army[5]);  */// и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// console.log( army[0]() )// у 0-го стрелка будет номер 10
// console.log( army[1]() )// у 0-го стрелка будет номер 10
// console.log( army[2]() )// у 0-го стрелка будет номер 10
// console.log( army[3]() )// у 0-го стрелка будет номер 10


// 6.6 named Function Expression

/* let sayHi = function name() {
  console.log("hello");
  console.log(sayHi.name)
}
sayHi() */
// name позволяет ссыльаться на себя же
// ---
// name не доступно за пределами функции

// 6.6 (1) 
// let counter = function makeCounter() {

// }

// 6.7 синтаксис New Function

///6.8 Планирование: setTimeout и setInterval

/* let printNumbers = (from, to) => {
let current = from

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000)
    }
    current++
  }, 1000)
}
printNumbers(1 ,9)
 */

/* let timerId = setInterval(() => {

    if (current < to) {
      console.log(current);
      current++
    }
    if (current == to) clearInterval(timerId)
  }, 1000)
} 
printNumbers(1 ,9)
*/


// 6.9 Декораторы и переадресация вызова, call/apply
// cachingDecorator - Оберточная функция которая добавляет основной кеширование

// func.call - устанавливает первый аргумент как равный this
// служит если функция вызывается в контексте объекта

// func.apply - устанавливает первый аргумент как равный this
// служит если функция вызывается в контексте объекта, вторым агументов принмимает маассив

// 6.9 (1)

/* spy = (func) => {
  wrapper = (...arg) => {
    wrapper.calls.push(arg)
    return func.apply(this, arg)
  }
  wrapper.calls = []
  return wrapper
} */


// 6.9 (2)

/* function delay(func, time) { 
  console.log(func);
  console.log(time);
  return function() {
    setTimeout(() => func.apply(this, arguments), time)
    console.log(func);
    console.log(time);  
  }
}
// создаём обёртки
let f1000 = delay(console.log, 1000);
let f1500 = delay(alert, 1500);

f1000(["test", "test", "test", "test", "test"]); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс */

/* function delay(func, time) { 
  let param
    setTimeout(param = function() {func.apply(this, arguments)}, time)
  }
// создаём обёртки
let f1000 = delay(alert, 1000);
let f1500 = delay(alert, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс */








/* let dictionary = Object.create(null, {
  toString: { // определяем свойство toString
    value() { // значение -- это функция
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple и __proto__ выведены в цикле
/* for(let key in dictionary) {
  console.log(key);} 


console.log(Object.keys(dictionary));
// ваш метод toString в действии
console.log(dictionary); 
console.log(typeof(dictionary));
 */














/* class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // ошибки нет
alert(rabbit.name); // White Rabbit */
// const options = {template: 'h:m'}
// const clock = new Clock(options);

/* class Clock {
  constructor(options) {
    this.template = options.template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


class ExtendedClock extends Clock {
  constructor(options) {
    super(options)
    let { precision = 1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render() , this.precision)
  }
  
}


const clock2 = new ExtendedClock({template: 'h:m', precision: 2000});
clock2.start()


console.log(clock2) */


/* class CoffeeMachine {
  _waterAmount = 0; // количество воды внутри
  _waterLimit = 200;
  
  get _waterAmount() {
    return this._waterAmount
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное значение воды")
    this._waterAmount = value
  }

  get power() {
    this.power = power;
    alert( `Создана кофеварка, мощность: ${power}` );
  }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

// добавляем воды
coffeeMachine.waterAmount = 210; */






























/*   ЗАДАЧА 1
let task1 = function(number, degree) {
  if (degree == 1) {
    return number
  }
  else  {
    return  number * task1(number, degree - 1)
  }
} 


console.log(task1(2,4))
console.log(task1(4,2))  */

/* // короткая запись
 let task1 = function(a ,b) {
  if (b == 1) return a
  else return a * task1(a , b -1)
}
console.log(task1(2,2)) */

// ЗАДАЧА 2
/* let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
// console.log(typeof());

let newArr = []
let funcRecurs = arr.filter((element,i,arr) => {
  if (typeof(element) === "number") {
    newArr.push(element)
  } else {
    if (typeof(element) === "object") {
      element.filter((element,i,arr) => {
        if (typeof(element) === "number") {
          newArr.push(element)
        } else {
          if (typeof(element) === "object") {
            element.filter((element,i,arr) => {
              if (typeof(element) === "number") {
                newArr.push(element)
              } else {
                if (typeof(element) === "object") {
                  element.filter((element,i,arr) => {
                    if (typeof(element) === "number") {
                      newArr.push(element)
                    } else {
                      if (typeof(element) === "object") {
                        element.filter((element,i,arr) => {
                          if (typeof(element) === "number") {
                            newArr.push(element)
                          } else {
                            if (typeof(element) === "object") {
                              return
                              // element.funcRecurs
                            }
                          } 
                        })
                        // element.funcRecurs
                      }
                    } 
                  })
                  // element.funcRecurs
                }
              } 
            })
            // element.funcRecurs
          }
        } 
      })
      // element.funcRecurs
    }
  } 
});
console.log(...newArr);
console.log(newArr);
console.log(...arr);
console.log(arr);

*/



/*  function reck() { (element) => {
  if (typeof(element) === "number") {
    newArr.push(element)
  } else {
    if (typeof(element) === "object") {
      element.filter()
      // element.funcRecurs
    }
  } 
} 
 } */


/* let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
// console.log(typeof());

let newArr = []
let funcRecurs = arr.filter(function rec(element,i,arr) {
  if (typeof(element) === "number") {
    newArr.push(element)
  } else {
    if (typeof(element) === "object") {
      element.filter()
    }
  }
}) */



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// ЗАДАЧА 2
/* let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
// console.log(typeof());

let newArr = []
let funcRecurs = arr.filter((element) => {
  if (typeof(element) === "number") {
    newArr.push(element)
  } else {
    if (typeof(element) === "object") {
      element.filter( reck())}}
       })

 function reck() { (element) => {
  if (typeof(element) === "number") {
    newArr.push(element)
  } else {
    if (typeof(element) === "object") {
      element.filter()
      // element.funcRecurs
    }
  } 
} 
 } */



/*
console.log(...newArr);
console.log(newArr);
console.log(...arr);
console.log(arr); */











/*  let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
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

// for (let element of arr) {
  arrr(arr)
// };

console.log(newArr); */
































































// задача 3 (здесь разбивает тысчи по цифрам в массив и сотни)
/* const in10 =  ['', 'один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять ']
const in20 = ['десять ', 'одиннадцать', 'двенадцать ', 'тринадцать', 'четырнадцать', 'пятнадцать ', 'шестанадцать ','семнадцать ', 'восемнадцать ', 'девятнадцать ']
const in100 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
const in1000 = ['', 'сто', 'двести', 'тристо', 'четыресто', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
const in10000 = ['', 'тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
const in100000 = ['', 'десять тысяч', 'двадцать тысяч', 'тридцать тысяч', 'сорок тысяч', 'пятьдесят тысяч', 'шестьдесят тысяч', 'семьдесят тысяч', 'восемьдесят тысяч', 'девяносто тысяч']
const last100000 = ['сто тысяч']

// prompt("введите число от 0 до 100 000", "0")
let numInput = 145
let arrBefore100 = []
let arrAfter1000 = []
let num100 = 0
let num1000 = 0
const renameToString = (numInput) => {
  if (numInput < 0 || numInput > 100000) {console.log("число не подходит");}
  else {
    if (numInput > 999) {
      num1000 = String(Math.floor((numInput / 1000)))
      arrAfter1000 = [...num1000]
      
      num100 = String(Math.floor(numInput - num1000 * 1000))
      arrBefore100 = [...num100]
    }
    else {
      num100 = String(Math.floor(numInput - num1000 * 1000))
      arrBefore100 = [...num100]
    } 


  // arrBefore100 = [...numInput]
  if (arrBefore100.length === 2) console.log(a);
  // console.log(numInput + " введеное число");
  console.log(arrAfter1000);
  console.log(arrAfter1000 + " это массив arrAfter1000");
  console.log(arrBefore100);
  console.log(arrBefore100 + " это массив arrBefore100");
  }
}

renameToString(numInput) */

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































// попытка 2
// const in10 =  ['', 'один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять ']
// const in20 = ['десять ', 'одиннадцать', 'двенадцать ', 'тринадцать', 'четырнадцать', 'пятнадцать ', 'шестанадцать ','семнадцать ', 'восемнадцать ', 'девятнадцать ']
// const in100 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
// const in1000 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
// const in10000 = ['', 'тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
// const in100000 = ['', 'десять тысяч', 'двадцать тысяч', 'тридцать тысяч', 'сорок тысяч', 'пятьдесят тысяч', 'шестьдесят тысяч', 'семьдесят тысяч', 'восемьдесят тысяч', 'девяносто тысяч']
// const last100000 = ['сто тысяч']

// // prompt("введите число от 0 до 100 000", "0")
// let numInput = 3121
// let arrBefore1000 = []
// let arrOfWordsBefore1000 = []
// let arrAfter1000 = []
// let arrOfWordsAfter1000 = []
// let num100 = 0
// let num1000 = 0
// const renameToString = (numInput) => {
//   if (numInput < 0 || numInput > 100000) {console.log("число не подходит");}
//   else {
//     if (numInput > 999) {
//       num1000 = String(Math.floor((numInput / 1000)))
//       arrAfter1000 = [...num1000]
      
//       num100 = String(Math.floor(numInput - num1000 * 1000))
//       arrBefore1000 = [...num100]
//     }
//     else {
//       // console.log("тут меньше 1000");
//       num100 = String(Math.floor(numInput - num1000 * 1000))
//       arrBefore1000 = [...num100]
//      /*  let qwe = (arrNum) => 
//         {for (let i = 1; i <= arrNum.length; i++)  
//           {
//             if (arrNum[i] === arrBefore1000) {
//               arrNum.push(in10[i])
//               console.log(typeof(in10[i]));
//               console.log(Array.prototype.indexOf(in10[i]));
//             }
//           }
//         console.log(arrOfWordsBefore1000);
//       }  */
//       let findFunc = (arrNum) => {
// /*         if (arrNum === arrBefore1000) {
//           let cloneArrNumLength = arrNum.length
//           for (let i = 0; i < 3; i++) {
//               console.log(i);
//             }

//           if (arrNum.length === 3) {
//            if (arrNum[0]) {
//             console.log(arrNum[0]);
//             arrOfWordsBefore1000.push(in1000[cloneArrNumLength])
//           }
//             console.log(arrNum);
//             // if (typeof(arrNum[1]) === "number") {}
//             console.log(cloneArrNumLength);
//             console.log(arrNum[2] + " вывод значения под индексом 2");
//             console.log(typeof(arrNum[2]));
//           }
//           else if (arrNum.length === 2) {
//             console.log("fuck");
//           }
//           else {
//             console.log("another fuck");
//           }
//         } else if (arrNum === arrAfter1000) {
//           console.log("this for 1000");
//         }
//       } */
//       findFunc(arrBefore1000)
//       // findFunc(arrAfter1000)
//     } 
    
//     // for (let i = 0; i < 3; i++) {
//     //   console.log(i);
//     // }
    
//     console.log(arrBefore1000);
//     console.log(arrBefore1000 + " это массив arrBefore1000");
//     console.log(arrAfter1000);
//     console.log(arrAfter1000 + " это массив arrAfter1000");
//     console.log(arrOfWordsBefore1000 + " массив куда будем складывать слова");
//   }
// }

// renameToString(numInput)





























// ВЫВОДИТ В БУКВЕННОМ, НЕ ХВАТАЕТ (ТЫСЯЧА, ДВЕ ТЫСЯЧИ, ТРИ ТЫСЯЧИ, ЧЕТЫРЕ ТЫСЯЧИ)
// ПОЧТИ ГОТОВО


// const in10 =  ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
// const in20 = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестанадцать','семнадцать', 'восемнадцать', 'девятнадцать']
// const in100 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
// const in1000 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
// const in10000 = ['', 'тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
// const in100000 = ['', 'десять тысяч', 'двадцать тысяч', 'тридцать тысяч', 'сорок тысяч', 'пятьдесят тысяч', 'шестьдесят тысяч', 'семьдесят тысяч', 'восемьдесят тысяч', 'девяносто тысяч']
// const last100000 = ['сто тысяч']
// // const num234 = ['две' , 'три' , "ч"]
// // prompt("введите число от 0 до 100 000", "0")
// let numInput = 94393
// let arrBefore1000 = []
// let arrOfWordsBefore1000 = []
// let arrAfter1000 = []
// let arrOfWordsAfter1000 = []
// let num100 = 0
// let num1000 = 0

// const remadeToString = (numInput) => {
//   if (numInput < 0 || numInput > 100000) {console.log("число не подходит");}
//   else {
//     if (numInput > 999) {
//       num1000 = String(Math.floor((numInput / 1000)))
//       arrAfter1000 = [...num1000]
//       let findFuncAfter1000 = (arrNum) => {
//           if (arrNum.length === 3) {
//             console.log(arrNum);
//             let a = in1000[arrNum[0]]
//             let b = in100[arrNum[1]]
//             let c = in10[arrNum[2]]
//             arrOfWordsAfter1000.push(a)
//             if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
//             && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
//                 b = (in20[arrNum[2]]);
//                 console.log(in20[arrNum[2]]);
//                 console.log(arrNum[0]);
//                 if (arrNum[0]) {
//                   console.log(arrNum[0]);
//                 console.log("fuck");
//               }
//               arrOfWordsAfter1000.push(b)
//             }
//             else {
//             arrOfWordsAfter1000.push(b)
//             arrOfWordsAfter1000.push(c)
//             }
//           }
//           else if (arrNum.length === 2) {
//             let a = in100[arrNum[0]]
//             let b = in10[arrNum[1]]
            
//             if (+(String(arrNum[0]) + String(arrNum[1])) <= 19 && (+(String(arrNum[0]) + String(arrNum[1])) > 9)) {
//               b = (in20[arrNum[1]] + " тысяч");
//               console.log(b);
//               arrOfWordsAfter1000.push(b)
//               console.log(arrOfWordsAfter1000);
//             }
//             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 0)) {
//               b = ( in100[arrNum[0]] + in100[arrNum[1]] + " тысяч")
//               arrOfWordsAfter1000.push(b)
//             }
//             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 1)) {
//               b = ( in100[arrNum[0]] + " одна " + "тысяча")
//               arrOfWordsAfter1000.push(b)
//             }
//             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 2)) {
//               b = ( in100[arrNum[0]] + " две " + "тысячи")
//               arrOfWordsAfter1000.push(b)
//             }
//             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) > 2) && ((+String(arrNum[1]) <= 4))) {
//               b = ( in100[arrNum[0]] + ` ${in10[arrNum[1]]} ` + "тысячи")
//               arrOfWordsAfter1000.push(b)
//             }
// /*             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 3)) {
//               b = ( in100[arrNum[0]] + " три " + "тысячи")
//               arrOfWordsAfter1000.push(b)
//             }
//             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && ((+String(arrNum[1])) === 4)) {
//               b = ( in100[arrNum[0]] + " четыре " + "тысячи")
//               arrOfWordsAfter1000.push(b)
//             } */
//             else if ((+String(arrNum[0]) > 1 && +String(arrNum[0]) <= 9) && (((+String(arrNum[1])) > 4)  && ((+String(arrNum[1])) <= 9))) {
//               b = ( in100[arrNum[0]] + ` ${in10[arrNum[1]]} ` + "тысяч")
//               arrOfWordsAfter1000.push(b)
//             }
//             else {
//               arrOfWordsAfter1000.push(a)
//               arrOfWordsAfter1000.push(b)
//             }
//           }
//           else {
//             let a = in10000[arrNum[0]]
//             arrOfWordsAfter1000.push(a)
//           }
//         // console.log(arrNum.length);

//         // if (+String(arrAfter1000[0]) ) {}
//         // console.log(arrAfter1000[0]);
//       }
    
//       findFuncAfter1000(arrAfter1000)

//       num100 = String(Math.floor(numInput - num1000 * 1000))
//       arrBefore1000 = [...num100]
//       let CopyFindFuncBefore1000 = (arrNum) => {
//         if (arrNum.length === 3) {
//           // console.log(arrNum);
//           let a = in1000[arrNum[0]]
//           let b = in100[arrNum[1]]
//           let c = in10[arrNum[2]]
//           arrOfWordsBefore1000.push(a)
//           if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
//           && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
//             b = (in20[arrNum[2]]);
//             // console.log(in20[arrNum[2]]);
//             // console.log(arrNum[0]);
//             arrOfWordsBefore1000.push(b)
//           } 
//           else {
//           arrOfWordsBefore1000.push(b)
//           arrOfWordsBefore1000.push(c)
//           }
//         }
//         else if (arrNum.length === 2) {
//           let a = in100[arrNum[0]]
//           let b = in10[arrNum[1]]
//           if (+(String(arrNum[0]) + String(arrNum[1]) ) < 20 
//           && +(String(arrNum[0]) + String(arrNum[1]) ) > 9) {
//             b = (in20[arrNum[1]]);
//             console.log(b);
//             arrOfWordsBefore1000.push(b)
//           } 
//           else {
//             arrOfWordsBefore1000.push(a)
//             arrOfWordsBefore1000.push(b)
//           }
//         }
//         else {
//           let a = in10[arrNum[0]]
//           arrOfWordsBefore1000.push(a)
//         }
//       // console.log(arrNum.length);
//       }
//       CopyFindFuncBefore1000(arrBefore1000)
//     } 
//     else {
//       // console.log("тут если число изначально меньше 1000");
//       num100 = String(Math.floor(numInput - num1000 * 1000))
//       arrBefore1000 = [...num100]
//       let CopyFindFuncBefore1000 = (arrNum) => {
//         if (arrNum.length === 3) {
//           console.log(arrNum);
//           let a = in1000[arrNum[0]]
//           let b = in100[arrNum[1]]
//           let c = in10[arrNum[2]]
//           arrOfWordsBefore1000.push(a)
//           if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
//           && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
//             b = (in20[arrNum[2]]);
//             // console.log(in20[arrNum[2]]);
//             console.log(arrNum[0]);
//             if (arrNum[0] / 10 === 1) {
//               console.log(arrNum[0]);
//             console.log("fuck");
//             }
//             arrOfWordsBefore1000.push(b)
//           } 
//           else {
//           arrOfWordsBefore1000.push(b)
//           arrOfWordsBefore1000.push(c)
//           }
//         }
//         else if (arrNum.length === 2) {
//           let a = in100[arrNum[0]]
//           let b = in10[arrNum[1]]
//           if (+(String(arrNum[0]) + String(arrNum[1]) ) < 20 
//           && +(String(arrNum[0]) + String(arrNum[1]) ) > 9) {
//             b = (in20[arrNum[1]]);
//             console.log(b);
//             arrOfWordsBefore1000.push(b)
//           } 
//           else {
//             arrOfWordsBefore1000.push(a)
//             arrOfWordsBefore1000.push(b)
//           }
//         }
//         else {
//           let a = in10[arrNum[0]]
//           arrOfWordsBefore1000.push(a)
//         }
//       console.log(arrNum.length);
//       }
//       CopyFindFuncBefore1000(arrBefore1000)
//     }
//     let endArr = [...arrOfWordsAfter1000, ...arrOfWordsBefore1000]; 
//     // endArr = endArr.
// /*     console.log(endArr);
//     console.log(arrBefore1000);
//     console.log(arrBefore1000 + " это массив arrBefore1000");
//     console.log(arrAfter1000);
//     console.log(arrAfter1000 + " это массив arrAfter1000");
//     console.log(arrOfWordsBefore1000 + " массив куда будем складывать слова до тысячи");
//     console.log(arrOfWordsAfter1000 + " массив куда будем складывать слова тысяч"); */
//     console.log(endArr.join(" "));
//   }
// }

// remadeToString(numInput)





// Готовая функци перебора ви вывода массива из слов для до 1000
// findFunc = (arrNum) => {
//   if (arrNum.length === 3) {
//     console.log(arrNum);

//     let a = in1000[arrNum[0]]
//     let b = in100[arrNum[1]]
//     let c = in10[arrNum[2]]
//     arrOfWordsBefore1000.push(a)
//     if (+(String(arrNum[1]) + String(arrNum[2]) ) < 20 
//     && +(String(arrNum[1]) + String(arrNum[2]) ) > 9) {
//       b = (in20[arrNum[2]]);
//       arrOfWordsBefore1000.push(b)
//       // console.log(in20[7]);
//     } else {
//     arrOfWordsBefore1000.push(b)
//     arrOfWordsBefore1000.push(c)
//     }
// /*             console.log(a);
//     console.log(b);
//     console.log(c); */
//     // console.log(in1000[arrNum[0]]);
//   }
//     else if (arrNum.length === 2) {
//       let a = in100[arrNum[0]]
//       let b = in10[arrNum[1]]
//       if (+(String(arrNum[0]) + String(arrNum[1]) ) < 20 
//       && +(String(arrNum[0]) + String(arrNum[1]) ) > 9) {
//         b = (in20[arrNum[1]]);
//         arrOfWordsBefore1000.push(b)
//         // console.log(in20[7]);
//       } else {
//         arrOfWordsBefore1000.push(a)
//         arrOfWordsBefore1000.push(b)
//       }
//     }
//     else {
//       let a = in10[arrNum[0]]
//       arrOfWordsBefore1000.push(a)
//     }
//   console.log(arrNum.length);
// }
// findFunc(arrBefore1000)
















/* 
symbol.Iterator
map
set
*/































































// let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]


// let newARR = []
// let funcRec = arr.filter((element) => {
//   if (typeof(element) === "object") {
//     funcRec()
//   } else if (typeof(element) === "number") {
//     newARR.push(element)
//   }
// })
// funcRec(arr)
// console.log(newARR);



// ЗАДАЧА 2
/*  let arr = [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 10]]]],6]
// console.log(typeof());

let newArr = []
let funcRecurs = arr.filter((element,i,arr) => {
  if (typeof(element) === "number") {
    newArr.push(element)
  } else {
    if (typeof(element) === "object") {
      element.filter((element,i,arr) => {
        if (typeof(element) === "number") {
          newArr.push(element)
        } else {
          if (typeof(element) === "object") {
            element.filter((element,i,arr) => {
              if (typeof(element) === "number") {
                newArr.push(element)
              } else {
                if (typeof(element) === "object") {
                  element.filter((element,i,arr) => {
                    if (typeof(element) === "number") {
                      newArr.push(element)
                    } else {
                      if (typeof(element) === "object") {
                        element.filter((element,i,arr) => {
                          if (typeof(element) === "number") {
                            newArr.push(element)
                          } else {
                            if (typeof(element) === "object") {
                              return
                              // element.funcRecurs
                            }
                          } 
                        })
                        // element.funcRecurs
                      }
                    } 
                  })
                  // element.funcRecurs
                }
              } 
            })
            // element.funcRecurs
          }
        } 
      })
      // element.funcRecurs
    }
  } 
});
console.log(...newArr);
console.log(newArr);
console.log(...arr);
console.log(arr); */

















