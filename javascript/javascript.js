/*
var value = "test";
var n = 80;

var flag = true;

console.log(value);
console.log(n);
console.log(flag);

var nome = 'DM121';
console.log(nome);

console.log(nome.length);
console.log(nome.toLocaleLowerCase());

console.log(!0);
console.log(!null);
console.log(!undefined);
console.log(!'');


var myArray = [0, 10, 60];
console.log(myArray);
var myArrayObj = new Array(5);
console.log(myArrayObj);
*/

/*const numbers = [0, 1, 2, 3, 4];

for (let index = 0; index < numbers.length; index++) {
    setTimeout(() => {
        console.log(index, numbers[index]);
    }, 1000);
}*/
//index declared as var
//console.log('The value of index is ' + index + ' even if it was declared inside the for loop!');
//declare it as let, it defines the variable as local only and not global, as var

//ES6
/*
let myLet = "value";
const myConst = "value";

console.log(myLet);
console.log(myConst);

const printMessage = (message) => console.log(message);

printMessage('DM121');

//console.log(this);

window.nome = 'DM121';
function Class() {
    this.nome = 'DM121 2';
    // setTimeout(function() {
    //     console.log('Nome', this.nome)
    // }, 300);

    //The function above print 'DM121'

    setTimeout(() => {
        console.log('Nome', this.nome)
    }, 300);
}

var p = new Class();


var sectionSports = document.getElementById('sports');

var newElement = document.createElement('h3');

var text = document.createTextNode('h3 text create by document.createTextNode');

newElement.setAttribute('id', 't3');

newElement.appendChild(text);

sectionSports.appendChild(newElement);
*/

var services = [
    {
        "title": "Design",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "price": 2000.00,
        "month": false
    },
    {
        "title": "Suport",
        "description": "Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem.",
        "price": 200.00,
        "month": true
    },
    {
        "title": "Host",
        "description": "Orci varius natoque penatibus et magnis dis parturient montes.",
        "price": 35.00,
        "month": true
    }
]