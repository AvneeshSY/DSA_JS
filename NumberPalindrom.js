
var isPalindrome = function(x) {
    let newnum=""
   let xstr = x.toString();
//    xstr=xstr.length

   for(var i=xstr.length-1; i>=0 ;i--){
     newnum +=xstr[i]
   }
   if(newnum==xstr){
    return true
   }
   else{
      return false
   }
};

console.log("saving data is==",isPalindrome(-121))