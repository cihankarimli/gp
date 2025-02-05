
let parfums=[{
    id:1500,
    brand:'Dior',
    model:'HommeIntense',
    season:'Winter',
    longeviety:3,
    sillage:2,
    notes:'Alma'
}, {
    id:1900,
    brand:'brandom',
    model:'HommeIntense',
    season:'Winter',
    longeviety:3,
    sillage:2,
    notes:'Alma'
},
{
    id:2100,
    brand:'Ysl',
    model:'HommeIntense',
    season:'Winter',
    longeviety:3,
    sillage:2,
    notes:'Alma'
}

]



/*function uptudeFrangranceinfo(id,property,value) {
    let parfum = parfums.find(parfum => parfum.id === id);
    parfum[property] = value;
    console.log(parfum);
    
}

uptudeFrangranceinfo(2100,"brand","Dior")*/


function displayAndClearWord(word, delay) {
    console.log(word); 
    setTimeout(() => {
        console.clear(); 
    }, delay * 1000); 
}


function displayInfo(id){
    
    let parfum =parfums.find(parfum=>parfum.id===id)
    console.log(parfum);
    
}
console.log(displayAndClearWord('Loading...',3));

setTimeout(()=>{
    
    displayInfo(2100);
},3000)



/*function listFrangranceNotes(id){
    for (let i = 0; i < parfums.length; i++) {
      if(parfums[i].id===id){
        let parfum=parfums[i].notes
        console.log(parfum);
        
      }
    }
}
listFrangranceNotes(2100);*/


function processFragranceName(id,callback){
     let parfumData=parfums.find(parfum=>parfum.id===id)
        let result=callback(parfumData.brand)
        return result   
}
function nameToUppercase(name){

return name.toUpperCase()
}
function capatalizeNameLAstLetter(name){
    let array=name.split()
    let upper=array.toUpperCase(name.length-1)
    let word=upper.join()
    return word
}
console.log(processFragranceName(2100,nameToUppercase));
console.log(processFragranceName(1900,));
