var color;
var rgb="";
function getRGB(color){
	switch(color){
     case "FF0000":
     rgb="(255,0,0)" ; 
      break;
    case "00FF00":
     rgb="(0,255,0)";
      break;
     case "0000FF":
     rgb="(0,0,255)";
      break;
    default:
     console.log("not valid")
     break;

	}
	return rgb;
	
}
var input=getRGB("00FF00");
input;