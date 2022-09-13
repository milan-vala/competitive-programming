let array = [2,3,5,1];

function sum(array) {
  let sum=0;
  for (let i=0; i<array.length; i++) {  
    sum = sum + array[i];
  }
  console.log("sum :", sum);
}

sum(array);
