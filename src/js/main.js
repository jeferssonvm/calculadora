const bottons = document.querySelectorAll(".keyboard__buttons");
const calculator ={
    dateSaved: null ,
    dateMemory:"" ,
    dateResult:null,
    operator: "",
    mathOperation:function(){
        this.dateMemory= Number(this.dateMemory);
        this.dateResult= Number(this.dateResult);
        this.dateSaved= Number(this.dateSaved);
        if (this.operator === "+"){
            this.dateResult = this.dateSaved + this.dateMemory;
        }else if (this.operator === "-"){
            this.dateResult = this.dateSaved - this.dateMemory;
        }else if (this.operator === "*"){
            this.dateResult = this.dateSaved * this.dateMemory;
        }else if (this.operator === "/"){
            this.dateResult = this.dateSaved / this.dateMemory;
        }
  
        const result = this.dateResult;
        
        this.reset();

        this.dateMemory = result.toString();
    },
    reset:function(){
        this.dateSaved= null;
        this.dateMemory= "";
        this.dateResult= null;
        this.operator= "";
    },
    addNumber:function(value){
        this.dateMemory = this.dateMemory + value.toString() ;
    },
    delNumber:function(){
        this.dateMemory = this.dateMemory.substring(0, this.dateMemory.length -1);
        
    },
    eventManager:function(date){
        if(date === "/" || date === "*" || date === "+" || date === "-"){
            // this.mathOperation
            this.operator = date;
            console.log(this.operator)
        }else if (date === "reset"){
            this.reset();
        }else if(date === "del"){
            this.delNumber();
        }else if (date === "result"){
            this.mathOperation();
            console.log(this.dateResult)
        }else if (date ==="comma"){
            console.log(this.dateMemory.includes("."))
            const hasComma =this.dateMemory.includes(".")
                if (this.dateMemory.length != 0){
                    if(!hasComma){
                        this.dateMemory = this.dateMemory + ".";
                    }
                }
        }else{
            
            if(this.operator !=  ""){
                if (this.dateSaved == null){
                    console.log(this.dateSaved)
                    this.dateSaved = this.dateMemory;
                    console.log(this.dateSaved)
                    this.dateMemory = "";
                    console.log(this.dateMemory)
                    this.addNumber(date)
                    console.log(this.dateMemory)
                }else{
                    this.addNumber(date)
                }
            }else{
                console.log(date)
                this.addNumber(date)    
            }
        }

    }
}
const display = document.getElementById("display")
bottons.forEach(btn => {
    btn.addEventListener("click",function prueba(){
        calculator.eventManager(btn.value)
        const screenShow = calculator.dateMemory;
        display.innerHTML = screenShow.replace(".", ",");
    })
})


