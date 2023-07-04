function call(){
    var option = document.getElementsByName('ch');
    let m;
    for(let i=0;i<option.length;i++){
        if(option[i].checked){
            m=option[i].value;
        }
    }
    let r=-1;
    if(m=="rock"){
        r=0;
    }
    else if(m=="paper"){
        r=1;
    }
    else if(m=="scissor"){
        r=2;
    }
   let t=Math.floor(Math.random()*3);
   if(r==-1){
    alert("you haven't choose any option.choose please!");
   }
    if(t==0){
        if(r==0){
            alert("The mathch is draw! play again...");
        }
        else if(r==1){
            alert("congratulation! you win.play again..");
        }
        else if(r==2){
            alert("oops! you loose. play again..")
        }
    }
    else if(t==1){
        if(r==0){
            alert("oops! you loose. play again..")
           
        }
        else if(r==1){
            alert("The mathch is draw! play again...");
            
        }
        else if(r==2){
            
            alert("congratulation! you win.play again..");
        }
    }
    else{
        if(r==0){
            alert("congratulation! you win.play again..");
          
           
        }
        else if(r==1){
            alert("oops! you loose. play again..")
            
        }
        else if(r==2){
            alert("The mathch is draw! play again...");
           
        }
    }
   // alert(t);
}