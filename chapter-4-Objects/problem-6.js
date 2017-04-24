function MyMath(mth){
  this.array=mth;
  this.min=function(){
    var mini=1000000000;
    for(var i=0;i<=this.array.length-1;i++)
    {
      if(this.array[i]<=mini){
        mini=this.array[i];
      }
      else{}
    }
  return mini;
  }
  
  this.max=function(){
    var maxi=0;
    for(var i=0;i<=this.array.length-1;i++)
    {
      if(this.array[i]>=maxi){
        maxi=this.array[i];
      }
      else{}
    }
  return maxi;
  }    
  

}
var m=new MyMath([9,5,1,3,2,8]);
//m.min()
//m.max()