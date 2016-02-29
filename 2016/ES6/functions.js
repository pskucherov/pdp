// Default Parameter Values in ECMAScript 6
var timeout = 1;
function makeRequest(url, timeout = 2000) {
    console.log(arguments, timeout)
}
makeRequest('1', 2);

// Rest Parameters
function pick(object, ...keys) {
    let result = Object.create(null);
    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}
console.log(pick(1, 2, 3, 4, 5));

console.log([1, 2, 3, 4]);


// Arrow Function
var sum = (num1, num2) => num1 + num2;
console.log(sum(1,2));

// No this Binding
var PageHandler = {
    id: "123456",

    init: function() {
        setTimeout(event => this.doSomething(), 1000);
    },

    doSomething: function() {
        console.log("Handling for " + this.id);
    }
};
PageHandler.init();
