 let user=document.querySelector("#user-score");
 let comp=document.querySelector("#comp-score");
 let usersc=0;
 let compsc=0;
  let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const compgame= () =>{
    const options=["rock", "paper","scissors"];
     const index=Math.floor(Math.random()*3);
     return options[index];
};

const drawgame = () =>{
    msg.innerText="Draw! Play Again";
    msg.style.backgroundColor="blue";
};


const showwinner=(userwin,cid,compc) =>{
if(userwin){
    usersc++;
    user.innerText=usersc;
    msg.innerText="You Win!";
    msg.style.backgroundColor="green";
}
else {
    compsc++;
    comp.innerText=compsc;
    msg.innerText="You Lose!";
    msg.style.backgroundColor="red";
}
};

const playgame=(cid) =>{

const compc=compgame();

if(cid===compc){
    drawgame();
}

else {
let userwin=true;

if(cid==="rock"){
    userwin= compc==="paper" ? false : true;
}

else if(cid==="paper"){
    userwin= compc==="scissors" ? false : true;
}

else {
        userwin= compc==="rock" ? false : true;
    }

    showwinner(userwin);
}
};


  choices.forEach((choice) => {
   let cid=choice.getAttribute("id"); 
    choice.addEventListener(("click"), () => {
       playgame(cid);
    });
  });