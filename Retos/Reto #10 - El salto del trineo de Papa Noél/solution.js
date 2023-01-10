function checkJump(heights) {
    let max = Math.max(...heights);
    let indexMax = heights.indexOf(max);
  
    let arrAsc = heights.slice(0, indexMax);
    let arrDesc = heights.slice(indexMax + 1, heights.length);
  
    let hasAscending = arrAsc.length > 0;
    let hasDescending = arrDesc.length > 0;
  
    let ascendingSorted = arrAsc.slice(1).every(( heigth, i ) => heigth >= arrAsc[i])
    let descendingSorted = arrDesc.slice(1).every(( heigth, i ) => heigth <= arrDesc[i])
  
    return hasAscending && hasDescending && ascendingSorted && descendingSorted;
  }