"use strict";
function sumAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumAge({ age: 12, name: "Yash" }, { age: 20, name: "Ved" });
console.log(result);
