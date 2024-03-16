
// arrow function example

setTimeout(  () => {
    console.log("Hello");
    setTimeout( () => {
        console.log("Hi");
        setTimeout( () => {
            console.log("Namaste");
            setTimeout( () => console.log("Bye!") , 2000 );
        } , 2000 );
    } , 2000 );
}, 2000 );