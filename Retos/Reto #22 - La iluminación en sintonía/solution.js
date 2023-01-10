function checkStepNumbers(systemNames, stepNumbers) {

    return systemNames.every((name, i) => {
      return stepNumbers[i] <= stepNumbers[i + systemNames
                              .slice(i + 1).indexOf(name)+1]
    });    
  }