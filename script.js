let Rules;
let arr=[];
let counter=0;
let button=document.querySelector("button");
let input=document.querySelector("input");
function iteration(){
    arr.push(Rules[counter]);
    document.querySelector("p").innerHTML=arr.join('');
    counter++;
    if(counter>Rules.length){
        clearInterval(interval)
    }
}
function printRules(link_to_your_game){
    
    let name="";
    name=input.value;
     Rules=`ку,${name}.нужно перевернуть все карточки и собрать все пары`;
     document.querySelector("p").innerHTML=Rules;
     interval=setInterval(iteration,100);
     input.remove();
     button.remove();
     let createA=document.createElement('a');
    createA.innerHTML="start game";
    createA.href=link_to_your_game;
    document.querySelector(".menu").append(createA);
}
console.log(Rules);