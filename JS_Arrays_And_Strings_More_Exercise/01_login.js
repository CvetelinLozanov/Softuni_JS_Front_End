function solve(input) {

    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        var splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
    
        // Step 2. Use the reverse() method to reverse the new created array
        var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
    
        // Step 3. Use the join() method to join all elements of the array into a string
        var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
    
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }

    const user = input.shift();
    let loginAtempts = 1;
    for ( let i=0; i < input.length; i++) {
       
        if ( user === reverseString(input[i])) {
            console.log(`User ${user} logged in.`)
            break;
        }  if ( loginAtempts === 4) {
            console.log(`User ${user} blocked!`)
            break;
        }  if (user !== reverseString(input[i])) {
            console.log('Incorrect password. Try again.')
        }               
        loginAtempts++;
    }
}


solve(['Acer','login','go','let me in','recA'])

solve(['sunny','rainy','cloudy','sunny','not sunny'])