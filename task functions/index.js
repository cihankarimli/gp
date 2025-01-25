//3. Cüt və ya tək ədəd Bir ədədin cüt və ya tək olduğunu yoxlayan isEven funksiyası yazın. Əgər ədəd cütdürsə true, təkdirsə false qaytarsın.

function isEven(number){
   if(number%2==0){
     console.log("true");
     
   }else{
    console.log("false");
    
   }
}
isEven(4);

//4.Ən böyük ədədi tapın. Üç ədəd qəbul edən və ən böyüyünü qaytaran findLargest funksiyası yazın.

function findLargest(a,b,c){
    if(a>b && a>c){
        console.log(a);
        
    }else if(b>a && b>c){
        console.log(b);
    }else if(c>a && c>b){
        console.log(c);
    }else{
        console.log("Iki ve daha beraber eded var");
        
    }

}
findLargest(10,7,6)


//5.Saitləri sayın.Verilmiş sətirdəki saitlərin sayını qaytaran countVowels funksiyası yazın.

function countVowels(word){
     const vowels=['i','o','u','e','a','I','O','U','E','A',]
    let count=0
    let charArray=word.split("")
    
    for (let i = 0; i < charArray.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            
            
        
         if(charArray[i]==vowels[j]){
            count=count+1
         }
         
        }
    }
 console.log(count);
}
 countVowels("salam");


   
 
 //6. Sətiri tərsinə çevirin.Sətiri tərsinə çevirən reverseString funksiyası yazın.

  function reverseString(word){
   let wordArray=word.split('')
   let reverseWordarray=[]
   for(let i=word.length-1;i>=0;i--){
        reverseWordarray.push(wordArray[i])
        
    }
    let reverseWord=reverseWordarray.join("")
    console.log(reverseWord);
    
    
  }
 reverseString("JavaScript")


//7. Çoxaltma cədvəli yaradın.Verilmiş ədədin 1-dən 10-a qədər çoxaltma cədvəlini yazdıran multiplicationTable funksiyası yaradın.
function multiplicationTable(number){
    for (let i = 0; i<=10; i++) {
        let calculation=number*i
        console.log(number,'X',i,'=',calculation);
        
        
    }
}
multiplicationTable(10);


//8. factorial funksiyasi

function factorial(number) {
    let count=1
    for(let i=1;i<=number;i++){
        count=count*i
    }
    console.log(count);
    
}
factorial(5)