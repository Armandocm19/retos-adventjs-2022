function fitsInOneBox(boxes) {
    let objOrdenados = boxes.sort( (a,b) => a.l - b.l && a.w - b.w && a.h - b.h ); //Ordena los objetos 
 
   return objOrdenados.every( (box, index) => {
     const indexA = index + 1;
     return boxes[indexA] ? ( box.l < boxes[indexA].l && box.w < boxes[indexA].w && box.h < boxes    [indexA].h ) : true;
   });
 }