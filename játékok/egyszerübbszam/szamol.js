const display = document.getElementById("display");
const results = document.getElementById('results');
 const szam1 = Math.floor(Math.random()*100);
 const szam2 =Math.floor( Math.random()*100);
 const oper= ["+","-"];
 const i = Math.floor(Math.random()*oper.length);
 const operator = oper[i];
 const muvelet = "";
 let pont =0 ;
 const k = 0;




window.onload = () => {
            
            results.value = muvelet.concat(szam1, operator,  szam2);
             
            }
function appendToDisplay(input){

    display.value += input;
}

   

function calculate( ){
   
    
       if(display.value == szam1 + szam2 || display.value == szam1 - szam2 ){
        
        alert("Siker!", pont++) ;
        results.value = "";
        display.value = 0;
    
        
        

    }else {

        alert("Sajnálunk, nem jó!", pont) ;

        display.value =""
        results.value = "";
        display.value = 0;
       
        pont = 0 ;
       
   }
   }
    
   



function dropAll(){

    display.value= "";

}



