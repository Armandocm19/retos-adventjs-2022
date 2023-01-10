function fixLetter(letter) {

    let correcion = letter
     // quita espacios duplicados
     .replace(/\s{2,}/g, ' ')
     // quita separadores duplicados
     .replace(/([,.?!]{2,})/g, (_, $1) => $1[0])
     // primera letra de frase mayuscula
     .replace(/([.?!])(\s)([A-z])/g, 
       (_,$1,$2,$3) => $1+$2+$3.toUpperCase()
     )
     // jojojo
     .replace(/[Ss]anta [Cc]laus/g, 'Santa Claus')
     // elimina espacio inicio y fin
     .trim()
     // elimina espacio antes de separador
     .replace(/\s([,.?!])/g, '$1')
     // letra mayuscula al inicio de carta
     .replace(/^([A-z])/,(_,$1)=>$1.toUpperCase())
     // . al fin de carta
     .replace(/([^.?!])$/,'$1.')
    
  
    return correcion
  }