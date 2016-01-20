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
