'use strict'


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

//5.2 (5)
/* function random(a, b) {

} */
// console.log("A" > "B")

// VAR  не видно если он используется в функции.................


// for(let i = 0; i < 10; i++) setTimeout(() => console.log(i), 1000)
// for(var i = 0; i < 10; i++) console.log(i)

let num = {"a": 1}
let q = num
// q = {"a": 2}
q.a = 3
console.log(q)

console.log(num)
// q = num
console.log(q === num)























