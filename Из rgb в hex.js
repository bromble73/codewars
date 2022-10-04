function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}
function toHex(colorCode) {
    if(colorCode < 0 ) {return "00";}
    if(colorCode > 255 ) {return "FF";}
    return  ("0"+(Number(colorCode).toString(16))).slice(-2).toUpperCase()
}
