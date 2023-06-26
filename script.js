// for ( var i = 0; i < 2; i++)
// alert( i );

// for ( var i = 1; i < 11; i++)
// alert ( i );

// var five = ["foo", "bar", "baz", "go", "back"]; // first we create an array.
// for( var i = 0; i< five.length; i++) {
//     alert( five[i]); //This would alert each item on the array
// }

function sizeA(arr) {
    alert(arr.length)
}

var test = [1,2,3,4,5];
sizeA(test);

function addNumbers(a,b) {
    return a + b;
}

alert( addNumbers(2,5));

var foo = "value" ;
alert(foo);

function double(num) {
    total = num + num;
    return total;
}
var total = 30;
var number = double( 20 );
alert(total); // Alerts 40