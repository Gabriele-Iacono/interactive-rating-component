const submit = document.getElementById("Submit");
const voti = document.querySelectorAll("#voto");
const areavoto = document.getElementById("areavoto");
const selezionato = document.getElementById("selezionato");
const arearisultato = document.getElementById("arearisultato");
let votou;
voti.forEach((voto) =>{
    voto.addEventListener("click", function(){
        voti.forEach((voto) =>{
            voto.classList.remove("bg-[#FFF]")
        })
        votou = voto.innerHTML
            voto.classList.add("bg-[#FFF]")
        

    })
})
submit.addEventListener("click", function(){
    areavoto.classList.add("hidden")
    arearisultato.classList.remove("hidden")
    selezionato.innerHTML = votou ? votou : "none" 
})

