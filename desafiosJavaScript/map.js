
var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

 (array) => { fahrenheit.map() 
    var graus = Math.round( ( array - 32 ) * 5 / 9 );
    return console.log(graus)
}
    

// ES6
// fahrenheit.map( elem => Math.round( ( elem - 32 ) * 5 / 9 ) );
