const bottons = document.querySelectorAll(".keyboard__buttons");
const calculator ={
    dateSaved: null ,
    dateMemory:"" ,
    dateResult:null,
    operator: "",
    mathOperation:function(){
        console.log(this.operator   )
        if (this.operator === "+"){
            this.dateResult = this.dateSaved + this.dateMemory;
        }else if (this.operator === "-"){
            this.dateResult = this.dateSaved - this.dateMemory;
        }else if (this.operator === "*"){
            this.dateResult = this.dateSaved * this.dateMemory;
        }else if (this.operator === "/"){
            this.dateResult = this.dateSaved / this.dateMemory;
        }
    },
    reset:function(){
        this.dateSaved= null;
        this.dateMemory= null;
        this.dateResult= null;
        this.operator= null;
    },
    addNumber:function(value){
        this.dateMemory = this.dateMemory + value.toString() ;
        console.log(this.dateMemory);
    },
    delNumber:function(){
        this.dateMemory = this.dateMemory.substring(0, this.dateMemory.length -1);
        console.log(this.dateMemory);
    },
    eventManager:function(date){
        if(date === "/" || date === "*" || date === "+" || date === "-"){
            console.log("entre")
            this.operator = date;
        }else if (date === "reset"){
            this.reset();
        }else if(date === "del"){
            this.delNumber();
        }else if (date === "result"){
            this.mathOperation();
        }else if (date ==="comma"){
            
        }else{
            this.addNumber(date)
        }

    }
}
const display = document.getElementById("display")
bottons.forEach(btn => {
    btn.addEventListener("click",function prueba(){
        calculator.eventManager(btn.value)
        display.innerHTML = calculator.dateMemory;
    })
})


