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
let n = 10
/* while (i < n && (n % i == 0)) {
  i++
  console.log(i)
} */
label:
for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label
  }
  console.log(i)
}




















