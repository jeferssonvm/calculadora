const bottons = document.querySelectorAll(".keyboard__buttons");
let concatenacion = [];
bottons.forEach(btn => {
    btn.addEventListener("click",function prueba(){
        hola(btn.value)
    })
})
function hola (btn){
    if (btn === "del"){
        window.alert("hola")
    }else if (btn === "reset"){
        window.alert("reset")
    }else if (btn === "")

    console.log(btn)
    // concatenacion.push(btn)
    // console.log(concatenacion)
}

