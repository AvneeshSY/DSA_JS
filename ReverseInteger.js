// Rever the Integer Value 
//  LIKE 123=321   OR       -123=-321


 const reverse=(num)=>{
    let reverseNum=num.toString().split("").reverse().join("")

    if(reverseNum.endsWith("-")){
        let finalReversedNum="-"+reverseNum.slice(0,-1)
        return parseInt(finalReversedNum)
    }else{
         return parseInt(reverseNum)
    }
    console.log("reversed value is ==>",reverseNum)

 }

 console.log("Revers the Number==>", reverse(-123))