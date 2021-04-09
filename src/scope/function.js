const fruits = () => {
    var fruit = 'apple';
    console.log(fruit)
}

fruits()

const anotherFunction = () => {
    var x = 1;
    var x = 3;
    let y = 1;
    let y = 2;
    
    console.log(x)
    console.log(y)
}

anotherFunction()

const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}

fruits()

let x = 2;
{
    let x = 1;
    console.log(x)
}

console.log(x)