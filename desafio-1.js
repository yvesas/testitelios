console.log("Running Desafio 1...");

function isPrime(num) {
  for(i=2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

for (i=1; i <= 100; i++){
  if(isPrime(i)){
    console.log("Número primo", i)
  }else{
    if( ( i % 3 == 0 ) && ( i % 5 == 0 ) ){
      console.log("Itelios, part of Capgemini", i)
    }else {
      if( i % 3 == 0 ){
        console.log("Itelios", i)
      }
      if( i % 5 == 0 ){
        console.log("Capgemini", i)
      }
    }
  }
  
}

