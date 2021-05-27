//Roman numeral converter
function convertToRoman(num) {
   const romanCodeMulTen = ['I', 'X', 'C','M']//0,1,10,100,1000
   const romanFive = ['V','L','D']; // 5, 50, 500

   const numArr = num.toString().split('').reverse(); //balik arai satuan dieksekusi pertama
   console.log(numArr)

   const convertedArr = []
   let converted = ''
   for(let i = 0; i < numArr.length; i ++){
      let val = parseInt(numArr[i]); 
      if(val < 4){
         converted = ''
         while(val > 0){
            converted += romanCodeMulTen[i]
            val--
         }
         convertedArr.push(converted);
         converted
      }else if(val === 4){
         converted = ''
         converted += romanCodeMulTen[i]+romanFive[i]
         convertedArr.push(converted)
      }else if(val < 9){
         converted = romanFive[i]

         while(val - 5 > 0 ){
            converted +=  romanCodeMulTen[i]
            val--
         }
         convertedArr.push(converted)
      }else if(val === 9){
         converted = romanCodeMulTen[i]+romanCodeMulTen[i+1]
         convertedArr.push(converted)
      }
   }

   const result = convertedArr.reverse().join('');



   console.log(result)
   return result

   }
   
convertToRoman(3999);

