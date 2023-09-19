const bottons = document.querySelectorAll(".keyboard__buttons");
const calculator ={
    dateSaved: "" ,
    dateScreen:null ,
    dateResult:null,
    operator:null,
    suma: function(){
        this.dateResult = this.dateScreen + this.dateSaved;
    },
    resta: function(){
        this.dateResult = this.dateScreen - this.dateSaved;
    },
    multiplicacion: function(){
        this.dateResult = this.dateScreen * this.dateSaved;
    },
    divicion: function(){
        this.dateResult = this.dateScreen / this.dateSaved;
    }
}
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
    }else if (btn === ""){

    }else if (btn === "div"){

    }else{
        
    }

}

