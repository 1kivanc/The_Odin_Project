const HashMap = require("./HashMap");

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("apple", "green");
test.set("banana", "black");

test.set("moon", "silver");

console.log(test.get("apple")); // green
console.log(test.get("banana")); // black
console.log(test.get("moon")); // silver

console.log(test.has("carrot")); // true
console.log(test.remove("carrot")); // true
console.log(test.has("carrot")); // false

console.log(test.length()); // 12

test.clear();
console.log(test.length()); // 0

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
