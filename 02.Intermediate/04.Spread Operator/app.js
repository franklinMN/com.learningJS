let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [ ...arr1, ...arr2 ];

console.log(arr1);
console.log(arr2);
console.log(arr3);

const user = {
    name: "Frank",
    age: 25
}

const admin = {...user};

console.log("User: " , user);
console.log("Admin: " , admin);