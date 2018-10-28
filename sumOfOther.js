function sumOfOther (InputArray){
    let ResultArray = []; 
    let sum = 0;
    
    for (let i = 0; i < InputArray.length;  i++) {
        sum += InputArray[i];
    }
    for(let j = 0; j < InputArray.length;  j++ ) {
        ResultArray.push(sum - InputArray[j]);
    }
    return ResultArray; 
}