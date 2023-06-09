function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return [];
    }else{
      const myArray = rangeOfNumbers(startNum , endNum - 1);
      myArray.push(endNum);
      return  myArray;
    }
  };
  console.log(rangeOfNumbers(1,5));