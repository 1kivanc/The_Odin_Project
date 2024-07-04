import LinkedList from "./LinkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null

console.log(list.size()); // 3
console.log(list.getHead().value); // 0
console.log(list.getTail().value); // 2
console.log(list.at(1).value); // 1
console.log(list.contains(1)); // true
console.log(list.find(1)); // 1
list.pop();
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> null

list.insertAt(2, 1);
console.log(list.toString()); // ( 0 ) -> ( 2 ) -> ( 1 ) -> null
list.removeAt(1);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> null
