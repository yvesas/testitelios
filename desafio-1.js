console.log("Running Desafio 1...");

for (x=1; x <= 100; x++){
  if( ( x % 3 == 0 ) && ( x % 5 == 0 ) ){
    console.log("Itelios, part of Capgemini", x)
  }else {
    if( x % 3 == 0 ){
      console.log("Itelios", x)
    }
    if( x % 5 == 0 ){
      console.log("Capgemini", x)
    }
  }
  
}