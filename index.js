//  forward counting ////////////   

for(var i = 1; i <= 100; i = i+10){
         
for(var i = 1; i <= 100; i += 10){
 
        
for(var j= i; j < i + 10; j++ ){
    document.write(" " +" " +  j + "  ");

}
document.write("</br></br>")}}

////////////////////////////////////////////////////////////

//  Backword countinting

//////////////////////////////////////////////
document.write(`<div><h1 style="text-align: center; background-color: aqua; margin-top: 5%;">BACKWORD COUNTING</h1></div></br>`)
for(var i = 10 ; i>=1 ; i--){
    

for(var i = 100; i >= 1; i -= 10){

for(var j= i; j > i - 10; j-- ){
    document.write(" "+" " +  j + " " );

}
document.write("</br></br>")
}}

/////////////////table/////////////

document.write(`<div><h1 style="text-align: center; background-color: aqua; margin-top: 6%;">MULTIPLICATION TABLE</h1></div></br>`)



for(var i=1; i<=10; i++){
    
    document.write(" "+" "+ 7 + " " + "X " +" " + i +" " + "= " +( 7 * i) +  "</br></br>")}