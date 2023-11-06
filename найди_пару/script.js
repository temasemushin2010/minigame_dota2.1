let lockboard=false;
let isflipedcard=false;
let first,second;
const cards=document.querySelectorAll('.card');
function flipCard(){
let item=event.target.parentElement;
if(lockboard) return lockboard;
if(event.target.parentElement===first) return first;
item.classList.toggle('flip');
if(!isflipedcard){
    isflipedcard=true;                        
    first=event.target.parentElement;
    return;
}
second=event.target.parentElement;
first.dataset.education===second.dataset.education?disableCards():unflipCardsl();
};
cards.forEach(card=>card.addEventListener('click',flipCard));
function disableCards(){
    first.removeEventListener('click',flipCard);
    second.removeEventListener('click',flipCard);
    recetboard();
}
function recetboard(){
[isflipedcard,lockboard]=[false,false];
[first,second]=[null,null];
}
[...cards].forEach(card=>{
    let random=Math.floor(Math.random()*40);
    card.style.order=random;
})
function unflipCardsl(){
    lockboard=true;
    setTimeout(()=>{
        first.classList.remove('flip');
        second.classList.remove('flip');
        recetboard();

    },1000);
}
