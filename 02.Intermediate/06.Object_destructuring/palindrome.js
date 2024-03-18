

function palindrome(str) {

    let tempStr = "";
    let reversedStr = "";
    let regExp = /^[a-zA-Z0-9]/;


    // filtering
    for( let char of str ){
        if( regExp.test(char) ){
            tempStr += char;
        }
    }

    // lower case
    tempStr = tempStr.toLowerCase();

    // reversing
    reversedStr = tempStr.split("").reverse().join("");
    
    // console.log(reversedStr);
    // console.log(tempStr);

    return tempStr === reversedStr;

    

}


console.log(palindrome("A man, a plan, a canal. Panama") );

