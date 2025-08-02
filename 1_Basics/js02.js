// string indexing
let myname="divyansh";

// d   i   v   y   a   n   s   h
// 0   1   2   3   4   5   6   7

console.log(myname[2]);   //  this will print v


// we can get length of the string by using stringname.length
 console.log(myname.length);  //gives 8

 // we can get last index of the string by length - 1
 console.log(myname[myname.length-1]);  // gives h

 //trim() - it removes all spaces from the string
 let string= "        lets do this   ";
 console.log(string);   // gives 'lets do this' with spaces
 string = string.trim();
 console.log(string);  // gives 'lets do this' without space before and after sentence



 // toUpperCase() - it makes lower case letters to all capital letters
 string = string.toUpperCase();
 console.log(string);     // gives 'LETS DO THIS' 
 // toLowerCase() - it returns every capital letter to lower case letter
 string = string.toLowerCase();
 console.log(string);     // gives 'lets do this'


 //slice(starting index, ending index) 
 // ending index letter is not included
 myname = myname.slice(0,5); 
 console.log(myname);  // gives divya
 console.log(string.slice(4)); // gives 'do this'

// replace()
// substring()
// includes()
// split()
