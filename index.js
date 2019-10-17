let newDwarves = [];


let dwarfRollCall =(dwarves) => {

for(let i =0;i<dwarves.length ; i++ ){

  newDwarves.push(`${i+1}. ${dwarves[i]} `);
}
return newDwarves.join("");
}

// function dwarfRollCall(dwarves) {
//   let j = 1;
//   return dwarves.map(function(x){
//     return `${j++}. ${x}`;
//   })
  
// }


let toUpperCaseArr = [];
let summonCaptainPlanet = (planeteerCalls)=>{

toUpperCaseArr =  planeteerCalls.map(function(x){
  return `${x.toUpperCase()}!`;
})
return toUpperCaseArr;
}


function longPlaneteerCalls(words) {


    for(let i=0; i<words.length;i++)
    {
      if(words[i].length >4){return true;}
    }
    return false;
  
}

// let findTheCheese =(foods) => {
// for(let i=0; i<foods.length;i++){
//     if(foods[i]==="gouda"){return "gouda";}
      
//     }
//   for(let i=0; i<foods.length;i++){
//     if(foods[i]==="cheddar"){return "cheddar";}
//   }  
//   return "no cheese!";
// }


let findTheCheese = (foods) =>{
  let newFoods = [];
    for(let i = 0; i < foods.length; i++){
      if(foods[i] === "cheddar" || foods[i] ==="gouda"){          newFoods.push(`${foods[i]}`);
        }
      }

      if(newFoods.length >0){
        return  `${newFoods}`
        };
        return "no cheese!";
}

