


const songs = [
    {
        name: "Song 1",
        singer: "Singer 1",
        duration: "3:45"
    },
    {
        name: "Song 2",
        singer: "Singer 2",
        duration: "4:20"
    },
    {
        name: "Song 3",
        singer: "Singer 3",
        duration: "2:55"
    }
    // Add more song objects as needed
];

const [ , ,  {name : n, singer} ] = songs;

console.log( n )
console.log( singer )
