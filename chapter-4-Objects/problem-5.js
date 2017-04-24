


function MyArray(){

  var mainArguments = Array.prototype.slice.call(arguments);
   this.color= arguments; 
 var str="";
   for ( var i=0;i<this.color.length;i++)
  {
    if(i==this.color.length-1)
    str=str+this.color[i];
    else
      str=str+this.color[i]+",";
      
  }
     
  for(var j=0,k=0;j<this.color.length;j++){
   
    
    this[j]=this.color[j];
    
    
   
  }
  
    
 

  this.push=function(apple){
  mainArguments[mainArguments.length]=apple;
    this.color=mainArguments;
    this.length=mainArguments.length;
        
 str="";
  for (i=0;i<mainArguments.length;i++)
  {
    if(i==mainArguments.length-1)
    str=str+mainArguments[i];
    else
      str=str+mainArguments[i]+",";
      
  }
     
  return this.length;

  }
  this.pop=function(){
      mainArguments.length--;
    return mainArguments;
    
  }
  
  
  this.toString=function(){
    return str;
        
  }
  
  this.join=function(orange){
  
     str="";
  for (i=0;i<mainArguments.length;i++)
  {
    if(i==mainArguments.length-1)
    str=str+mainArguments[i];
    else
      str=str+mainArguments[i]+orange;
      
  }
    return str;
  }
  
}
var a=new MyArray(8,2,3,"test");
//a.toString();
//a.length
//a[3]
//a.push('boo');
//a.length
//a.toString()
//a.color
//a.pop();
//a.toString()
a.join(" i am ")