'use strict'
class reloj{
    constructor(){
      setInterval(()=>{
        this.tiempo();
      },1000);
    }
    tiempo(){
      let date=new Date();
      let hrs=date.getHours();
      let min=date.getMinutes();
      let sec=date.getSeconds();
      console.log(hrs+':'+min+':'+sec);
    }
}

module.exports=reloj;
