// //1 ci task


function textModify(text,callbacks){

   return callbacks(text)
}
function firstChildLow(text){
    return text.charAt(0).toLowerCase()+text.slice(1)
}function noneSpace(text){
    return text.split(' ').join('')
}function firstChildup(text){
    return text.charAt(0).toUpperCase()+text.slice(1)
}function lastString(text){
    return text+"!"
}
let text ="salam dostlar"
console.log(textModify(text,firstChildLow));
console.log(textModify(text,noneSpace));
console.log(textModify(text,firstChildup));
console.log(textModify(text,lastString));


//2 ci task


function modifyNumber(num,callbacks) {
    return  callbacks(num) 
}
function twoLayers(num){
    
    return num*2
}
function twoPlenty(num){
    
    return num/2
}
function square(num){
    return num*num
}
function numMod(num){
   return Math.abs(num)
}
let num=-6
console.log(modifyNumber(num,twoLayers));
console.log(modifyNumber(num,twoPlenty));
console.log(modifyNumber(num,square));
console.log(modifyNumber(num,numMod));



//3 cu task



function transformArray(array, callback){
  return array.map(callback)
}
function sumOne(num){
   return num+1
}function minusNumber(num){
    if (num>0){
      return num-num*2
    }else{
        return num
    }
}function restNUmber(num){
    return num%3
}
let array=[1,2,3,-4,5,-6]
console.log(transformArray(array,sumOne));
console.log(transformArray(array,minusNumber));
console.log(transformArray(array,restNUmber));


//4 cu task

function findInArray(numbers, callback) {
    for (let i = 0; i < numbers.length; i++) {
      if (callback(numbers[i])) {
        return numbers[i];
      }
    }
}
   function firstCouplenumber(num){
    if(num%2===0){
        return num
    }
   }
   function biggerTen(num){
    if(num>10){
        return num
    }
   }
   function firstLetter(text){
     if(text[0]==="A"){
        return text
     }
   }
  
let  numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,"Banan","Alma","Armud"]
console.log(findInArray(numbers,firstCouplenumber));
console.log(findInArray(numbers,biggerTen));
console.log(findInArray(numbers,firstLetter));    

//5 ci task
function processUserData(user, callback) {
    const fullName = user.firstName+"  "+user.lastName;
    const isAdult = user.age >= 18;
    const emailParts = user.email.split('@');
    const hiddenEmail = `*****@${emailParts[1]}`;
    return callback(fullName, isAdult, hiddenEmail);
}

function getFullName(fullName, isAdult, hiddenEmail) {
    return fullName;
}

function checkIfAdult(fullName, isAdult, hiddenEmail) {
    return isAdult;
}

function getHiddenEmail(fullName, isAdult, hiddenEmail) {
    return hiddenEmail;
}

const user = {
    firstName: "Cihan",
    lastName: "Kerimli",
    age: 20,
    email: "cihan.kerimli@example.com"
};

console.log(processUserData(user, getFullName));
console.log(processUserData(user, checkIfAdult));
console.log(processUserData(user, getHiddenEmail));