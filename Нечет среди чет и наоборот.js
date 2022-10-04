// Есть массив с минамальным количеством чисел - 3
// Известно что все числа массива, кроме одного, являются либо четными, либо нечетными.
// Найти число отличающееся от других своей четностью/нечетностью

function findOutlier(integers){
    let even;
  if(integers[0]%2===0 && integers[1]%2===0 || integers[1]%2===0 && integers[2]%2===0 || integers[0]%2===0 && integers[2]%2===0 ){
    even = true;
  } else { 
    even = false;
  }
  var i=0;
  while(i < integers.length){
    if(even==true){
      integers[i]%2!==0 ? a=integers[i] : '';
    } else {
      integers[i]%2===0 ? a=integers[i] : '';
    }
    i++;
  }
  return a;
}
