function countTime(leds) {
    let arr = leds.join("").split("1")
    arr[0] += arr.pop()
    console.log(arr)
    return Math.max(...arr.map(led => led.length)) * 7;
  }