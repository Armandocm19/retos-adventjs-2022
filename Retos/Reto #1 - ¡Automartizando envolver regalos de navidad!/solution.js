function wrapping(gifts) {
    let regalosEnvueltos = [];
 
   gifts.map((item) => {
     let regalo = "";
 
     regalo += "*".repeat(item.length + 2);
     regalo += `\n*` + item + `*\n`;
     regalo += "*".repeat(item.length + 2);
 
     regalosEnvueltos.push(regalo);
   });
 
   return regalosEnvueltos;
 }