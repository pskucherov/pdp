// var инитится сразу для всего окружения
getValue();
function getValue(condition) {
    if (condition) {
        var value = "blue";
        return value;
    } else {
        // value is defined!!!
        console.log(value);
        return null;
    }
}

// Let - крут. инитится только в окружении блока
// и при окончании уничтожается
function getValue(condition) {
    if (condition) {
        let value = 'blue';
        return value;
    } else {
        // value doesn't exist here !!!
        return null;
    }
    // value doesn't exist here !!!
}

// Let не может повторно объявить переменную в том же окружении,
// но в другом блоке — может!

// Const — тоже самое, что и let,
// отличается тем, что переменная должна быть сразу инициализирована и менять её нельзя.

// Внезапно менять содержимое внутри объектов-констант — можно! %)
const person = {
    name: "Nicholas"
};
person.name = "Greg"; console.log(person);

// The Temporal Dead Zone (TDZ)
// Внезапно будет ошибка
if (condition) {
    console.log(typeof value);  // ReferenceError!
    let value = "blue";
}

// let в цикле - огонь!
var funcs = [];
for (let i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
});
// Только я не понял, переменная же вроде должна была уничтожиться... или не? )


// Внезапно можно переопределить переменную, с названием стандартной функции.
let RegExp = "Hello!";          // ok
let undefined = "Hello!";       // throws error (при этом undefined переопределить нельзя, т.к. это неконфигурируемое свойство в глобальном объекте
