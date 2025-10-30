// Median of the two sorted array


    const MedianofArray=(arr1,arr2)=>{
        var arr1len=arr1.length
        var arr2len=arr2.length
        const len=Math.max(arr1len,arr2len)
        for(var i=0;i<len;i++){
            if(arr2[i] !== undefined){
            arr1.push(arr2[i])
        }

        }

        for(var j=0; j<arr1.length;j++){
            for(var k=j+1;k<arr1.length;k++){
                if(arr1[j]>arr1[k]){
                    let temp=arr1[j]
                    arr1[j]=arr1[k]
                    arr1[k]=temp
                }
              
            }
         
        }
            //  return arr1
       if(arr1.length / 2 == 0){
         let median = Math.floor((arr1.length/2-1) + arr1.length/2)
         return arr1[median]
       }else{
        let median =Math.floor(arr1.length/2)
        return arr1[median]
       }

    }


    console.log("Median of the array is ",MedianofArray([1,2],[4]))