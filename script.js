let boxes=document.querySelectorAll(".box");
console.log(boxes);
turnO=true;
let patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner(boxes);
    })
})
const checkWinner=()=>{
    for(let pattern of patterns){
        let val1=boxes[pattern[0]].innerHTML;
        let val2=boxes[pattern[1]].innerHTML;
        let val3=boxes[pattern[2]].innerHTML;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1==val2 && val2==val3){
                console.log("winner");
            }
        }
    }
}
let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
   document.location.reload();
})
