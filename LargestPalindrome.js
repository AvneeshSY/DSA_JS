

const longestPalindrome=(str)=>{

    let max = "";

    for(var i=0; i<str.length; i++){
        for(var j=i+1; j<str.length; j++){

            let substr= str.substring(i,j)
            console.log("substring==>",substr)
           let reverse = substr.split("").reverse().join("");
                  console.log("reversedddd==>",reverse)

             if (substr === reverse && substr.length > max.length) {
               max = substr;
          }



        }
    }

return max;
}


console.log(longestPalindrome("babad"))