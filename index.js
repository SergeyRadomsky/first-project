'use strict'
/* let a = document.getElementById("id")
let b = document.querySelector("selector")
let c = document.querySelectorAll("selector")
let d = document.querySelectorAll("selector")
let e = document.body.matches("selector > ul > li[1]")
let f = document.body.closest(".Parent_selector")
let g = document.getElementsByClassName("") */


/* elem.hasAttribute(name) – проверить на наличие.
elem.getAttribute(name) – получить значение.
elem.setAttribute(name, value) – установить значение.
elem.removeAttribute(name) – удалить атрибут.
elem.attributes – это коллекция всех атрибутов. */


/* elem.classList.add/remove("class") – добавить/удалить класс.
elem.classList.toggle("class") – добавить класс, если его нет, иначе удалить.
elem.classList.contains("class") – проверка наличия класса, возвращает true/false.
 */


// ЗАДАЧА 1
const qwe = document.getElementById("btn-alert")
qwe.addEventListener("click", () => console.log("Уря!")) 

// ЗАДАЧА 2
const formika = document.getElementById("input-id") 
// formika.addEventListener("focusout" , () => console.log("вы потеряли фокус"))
// console.log(formika.innerHTML);
let btnQ = document.getElementById("btn-input")
// let x = formika.value

function func_on_click() {
  let x = document.getElementById('input-id').value
  btnQ = x
}
btnQ.onclick = () => {
  func_on_click()
}


// console.log(x);
// ЗАДАЧА 3

// let formika_Text = formika.value
// console.log(btnQ.innerHTML);
// console.log(formika_Text);
// btnQ.onclick(btnQ.innerHTML = formika_Text)


// btnQ.innerHTML = formika_Text

// console.log(formika_Text)




















