

function MyString(color){

this.color=color;
  for(var l=0;l<=this.color.length;l++){
   this[l]=this.color[l]; 
  }
this.length=function()
{
  for(var i=0;;i++)
  {if(this.color[i]==undefined)
    {return i;}
  else
  {}
   }
}
this.tostring=this.valueoF=function(){
return this.color;}
this.charAT=function (index)
{
return this.color[index]
}
this.concaT=function(strin)
{
return this.color+strin;
}
this.slicE=function(a,b)
{var as="";
for (var j=a;j<b;j++)
{
var as=as+this.color[j];
 
}
 return as;
}


this.spliT=function(ino)
{var pp=["",""];
for (var k=0;k<=this.color.length;k++)
{
if(this.color[k]==ino)
{
  for(var c=0;c<=(this.color.length-k+2);c++)
  {
    pp[1]=pp[1]+this.color[k+1]; 
    k++;
    
  }
break;
}
  else
  {
  pp[0]=pp[0]+this.color[k];
   
  
  }
 
}
 return pp;
}



}
var s = new MyString('ooiiupmujjkk'); 
//s[4]
//s.length;
//s.valueoF()
//s.charAT(2)
//s.concaT(' kkl')
//s.slicE(1,5)
//s.spliT('m');


