// Длина строки всё так же 2, флаг u не удалось заставить работать.
// В общем — пока одно разочарование...
let text = "𠮷";

console.log(text.length);           // 2
console.log(/^.$/.test(text));      // false
console.log(text.charAt(0));        // ""
console.log(text.charAt(1));        // ""
console.log(text.charCodeAt(0));    // 55362
console.log(text.charCodeAt(1));    // 57271

console.log(String.fromCodePoint(134071));
console.log(text.normalize().length);

function hasRegExpU() {
    try {
        var pattern = new RegExp(".", "u");
        return true;
    } catch (ex) {
        return false;
    }
}

if (hasRegExpU()) {
    var pattern = new RegExp(".", "u");
    console.log('hasRegExpU! text = ' + text);
    console.log(/^.$/.test(text));      // false
    console.log(pattern.test(text));     // true
}

function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

console.log(codePointLength("abc"));    // 3
console.log(codePointLength("𠮷bc"));   // 3 Ожидалось 3, а оно всё равно 4 :(



// Работа с подстроками

var msg = "Hello world!";

console.log(msg.startsWith("Hello"));       // true
console.log(msg.endsWith("!"));             // true
console.log(msg.includes("o"));             // true

console.log(msg.startsWith("o"));           // false
console.log(msg.endsWith("world!"));        // true
console.log(msg.includes("x"));             // false

console.log(msg.startsWith("o", 4));        // true
console.log(msg.endsWith("o", 8));          // true
console.log(msg.includes("o", 8));          // false


// Repeat!
console.log("x".repeat(3));         // "xxx"
console.log("hello".repeat(2));     // "hellohello"
console.log("abc".repeat(4)); // abcabcabcabc

// В регулярки добавился флаг 'y', но там мистика какая-то.
// Чёт как-то даже на ум не пришло, где это можно заиспользовать в жизни.


// Можно дополнять регулярки флагами
var re1 = /ab/i,
    // throws an error in ES5, okay in ES6
    a; //re2 = new RegExp(re1, "g"); Правда у меня здесь падает :)))

// В ES5, чтобы получить флаги, надо было приводить к строке и парсить регулярку
// в ES6 есть методы получения содержимого регулярки
var re = /ab/g;

console.log(re.source);     // "ab"
console.log(re.flags);      // "g"

// Ураааа!!! :)
console.log("Multiline \
    string");
console.log(`Multiline
    string`);

var name = "Nicholas",
    message = 'Hello, ${name}.';

console.log(message);       // "Hello, Nicholas."


// Огонь!
// Можно обрабатывать содержимое шаблона в методе.
function passthru(literals, ...substitutions) {
  let result = "";

    // run the loop only for the substitution count
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += +substitutions[i] + 3;
    }

    // add the last literal
    result += literals[literals.length - 1];

    return result;
}

var count = 10,
    price = 0.25,
    message = passthru`${count} items cost $${(count * price).toFixed(2)}.`;

console.log(message);       // "10 items cost $2.50." ... а вот и нет ;)


// Экранирование спецсимволов
let message1 = `Multiline\nstring`,
    message2 = String.raw`Multiline\nstring`;

console.log(message1);          // "Multiline
                                //  string"
console.log(message2);          // "Multiline\\nstring"
