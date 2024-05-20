//task#2
 type car ={
     engine :{
         horsepower:number,
     }
  getHorsepower:()=> number,
  };
  
  let myCar:car= {
  
      engine:{
          horsepower:300,
      },
      getHorsepower(){ 
          return this .engine.horsepower ;
      },
  };
  console.log(myCar.getHorsepower());
