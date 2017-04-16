
function getRGB(input_hex){
  
var red=parseInt(input_hex[0]+input_hex[1],16);
var green=parseInt(input_hex[2]+input_hex[3],16);
var blue=parseInt(input_hex[4]+input_hex[5],16);
var rgb=[red,green,blue];
  return rgb;
}
getRGB("0022FF");