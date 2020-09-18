let array = [3,5,7];
array.foo = 'hello';

for (let i in array) {
    console.log(i, array[i]);
}

for (let i of array) {
    console.log(i);
}