let cars = ['volvo', 'saab', 'bmw', 'tesla'];
let fruits = ['apple', 'banana', 'orange'];
let flowers = ['rose', 'tulip', 'lily', 'orchid'];

//kod 1
for (let i = 0; i < cars.length; i++){console.log(cars[i])}
//kod 2
let twoItems = cars.concat(fruits);
for (let i = 0; i < twoItems.length; i++){
    console.log(twoItems[i])
}
//kod 3
function nameList (list){
    for(let i = 0; i < list.length; i++){
        console.log(list[i])
    }
}
nameList(flowers)