function checkPart(part) {
    return (part === [...part].reverse().join('')) ? true 
    : [...part].filter(( letter, i ) =>{
      const subs = part.substring(0,i) + part.substring(i + 1);
      return subs === [...subs].reverse('').join('')
    }).length >= 1;
  }