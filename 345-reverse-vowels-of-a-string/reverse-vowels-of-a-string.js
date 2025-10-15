/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels="aeiouAEIOU"
    let chars=s.split("")
    let arrayOfVowels=[]


    for(let char of chars){
        if(vowels.includes(char)){
            arrayOfVowels.push(char)
        }
    }
     
     for(let i=0;i<chars.length; i++){
        if(vowels.includes(s[i])){
          chars[i]=arrayOfVowels.pop()
     }
        
     }return chars.join("")
     } 
