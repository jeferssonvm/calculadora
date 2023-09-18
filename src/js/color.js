
// const style = document.documentElement.style;
// console.log(style)
const listColor = {
    colorBackground: {nameCss:"--color-background", 
        colors: {firtColor:"#3B4664",secondColor:"#E6E6E6",thirdColor:"#17062A"}},
    colorBackgroundBtn: {nameCss:"--color-background-btn", 
        colors:{firtColor:"#252D44",secondColor:"#D3CDCD",thirdColor:"#1E0837"}},
    colorBackgroundHeader: {nameCss:"--color-background-header", 
        colors:{firtColor:"#181F32",secondColor:"#EEEEEE",thirdColor:"#1E0836"}},
    colorText: {nameCss:"--color-text", 
        colors:{firtColor:"#FEFFFE",secondColor:"#3B3B33",thirdColor:"#FFE534"}},
    colorTextBtn: {nameCss:"--color-text-btn", 
        colors:{firtColor:"#464B5C ",secondColor:"#3C3C31",thirdColor:"#FBE333"}},
    colorTextBtnResetDel: {nameCss:"--color-text-btn-reset-del", 
        colors:{firtColor:"#FEFEFF",secondColor:"#F9FFFF",thirdColor:"#FEFEFF"}},
    colorTextBtnResult: {nameCss:"--color-text-btn-result", 
        colors:{firtColor:"#FEFEFF",secondColor:"#F9FFFF",thirdColor:"#062D30"}},
    colorBtnResetDel: {nameCss:"--color-btn-reset-del", 
        colors:{firtColor:"#647299",secondColor:"#388186",thirdColor:"#56077C"}},
    colorBtnResult: {nameCss:"--color-btn-result", 
        colors:{firtColor:"#D13F30",secondColor:"#C85401", thirdColor:"#00DECF"}},
    colorBtn: {nameCss:"--color-btn", 
        colors:{firtColor:"#EAE3DB",secondColor:"#E5E4E0",thirdColor:"#331B4D"}},
    colorInput: {nameCss:"--color-input-color", 
        colors:{firtColor:"#D13F30",secondColor:"#C85500",thirdColor:"#0DE3DA"}},
    colorShadow1: {nameCss:"--color-shadow1", 
        colors:{firtColor:"#B4A599",secondColor:"#A69C92",thirdColor:"#86209D"}},
    colorShadow2: {nameCss:"--color-shadow2", 
        colors:{firtColor:"#414E71",secondColor:"#1D5C65",thirdColor:"#BF15F4"}},
    colorShadow3: {nameCss:"--color-shadow3", 
        colors:{firtColor:"#8F2316",secondColor:"#863700",thirdColor:"#6DF7EF"}},
}

const rootElement =document.documentElement.style;


if (document.querySelector('input[name = "select-color"')){
    document.querySelectorAll('input[name = "select-color"').forEach((loopInput) =>{
        loopInput.addEventListener("change" ,function (selectInput){
            const dateSelectInput =selectInput.target.value;
            console.log(dateSelectInput)
            if ("firt-color" === dateSelectInput){
                colorChange("firtColor")
                console.log()
            }else if ("second-color" === dateSelectInput){
                colorChange("secondColor")
                
            }else if("third-color" === dateSelectInput){
                colorChange("thirdColor")
            }
        })
    })
}

function colorChange (selectColor){
    Object.keys(listColor).map(varColor => {
        console.log(listColor[varColor].nameCss)
        rootElement.setProperty(listColor[varColor].nameCss, listColor[varColor].colors[selectColor])
    })
}


// colorBackground : #3B4664;
// colorBackgroundBtn:#252D44;
// colorBackgroundHeader: #181F32;
// colorText: #FEFFFE;
// colorTextBtn: #464B5C ;
// colorTextBtnResetDel:#FEFEFF;
// colorTextBtnResult:#FEFEFF;    
// colorBtnResetDel: #647299;
// colorBtnResult: #D13F30;
// colorBtn: #EAE3DB;
// colorInput-color: #D13F30;
// colorShadow1: #B4A599;
// colorShadow2: #414E71;
// colorShadow3: #8F2316;
// listColor[varColor].colors[selectColor]