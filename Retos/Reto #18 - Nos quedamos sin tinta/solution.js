function dryNumber(dry, numbers) {

    return Array(numbers)
                  .fill("hi")
                  .map((x, i) => i+1)
                  .filter(number => `${number}`.includes(dry))
    }