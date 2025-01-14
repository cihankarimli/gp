/*Tapşırıq:
Grade adlanan field-imiz var

Əgər 90-dan yuxarıdırsa alert versin ki,Əlaçı
70-90 arası alert versin yaxşı

50-70 arası alert versin kafi

0-50 kəst*/
let number=Number(prompt('Nece bal aldi?'))
if(number>90){
    alert('Elaci')
}else if(70<number && 90>=number){
    alert('Yaxsi')
}else if(50<number && 70>=number ){
    alert('Kafi')
}else if(50>=number){
    alert('Kesildin')
}
