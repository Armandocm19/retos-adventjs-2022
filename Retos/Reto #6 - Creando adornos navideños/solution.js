function createCube(size) {
    let espacionEnBlanco = size - 1
    let repTail = size
    let head = ''
    let tail = ''
    for(let i = 0; i < size; i++){
      head += (' '.repeat(espacionEnBlanco) + `/\\`.repeat(i+1) + '_\\'.repeat(size) + '\n')
      tail += (' '.repeat(i) + `\\/`.repeat(repTail) + '_/'.repeat(size) + '\n')
      espacionEnBlanco--;
      repTail--;
    }
  
    return head.concat(tail).slice(0, -1);
}