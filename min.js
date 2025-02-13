

const btnNo = document.getElementById("btnNo");
btnNo.onclick = () =>{
    for(let i = 0; i < 5; i++){
        let btnYes = document.createElement("button")
        btnYes.id = "btnYes";
        btnYes.textContent = "Yes";

        const innerWidth = window.innerWidth;
        const innerHight = window.innerHeight;

        const randomX = Math.floor(Math.random() * (innerWidth-120));
        const randomY = Math.floor(Math.random() * (innerHight-60));

        const ranX = Math.floor(Math.random() * (innerWidth-130));
        const ranY = Math.floor(Math.random() * (innerHight-70));


         btnYes.style.left = `${randomX}px`
         btnYes.style.top = `${randomY}px`

         btnNo.style.left = `${ranX}px`
         btnNo.style.top = `${ranY}px`
         btnNo.style.backgroundColor = `red`
         btnNo.style.color = `black`



         document.body.appendChild(btnYes);
         
    }

}
document.body.addEventListener("click",(e)=>{
    if(e.target.id === "btnYes"){
        window.location.href = "https://dara-009.github.io/jo/"
    }
})