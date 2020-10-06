var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'
var Onclick = undefined;
var date = document.getElementsByClassName("date"); 
for (i of cells){
    i.addEventListener(
        "click",
        function() {
            if(Onclick !== undefined)
            {
                Onclick.style.color="";
                Onclick.style["background-color"]="";
            }
            this.style.color="white";
            this.style["background-color"]="#000000";
            Onclick=this;
            
        }
    )
    
}
button.addEventListener(
    "click",
    function(){
        if(input.value !== ''){
            if(Onclick !== undefined){
                if(Onclick.children.length < 1){
                    var oDiv = document.createElement("div");
                    oDiv.innerText=input.value;
                    oDiv.style.color=color.value;
                    Onclick.appendChild(oDiv);
                }
                else{
                    Onclick.children[0].innerText=input.value;
                    Onclick.children[0].style.color=color.value;
                }
                input.value='';
                
            }
            console.log("AAAAA");
            
        }
    }
)

input.addEventListener('keyup', event => {
        if (event.keyCode === 13 && event.target.value !== ''){
            if(Onclick !== undefined){
                if(Onclick.children.length < 1){
                    var oDiv = document.createElement("div");
                    oDiv.innerText=input.value;
                    oDiv.style.color=color.value;
                    Onclick.appendChild(oDiv);
                }
                else{
                    Onclick.children[0].innerText=input.value;
                    Onclick.children[0].style.color=color.value;
                }
                input.value='';
            }
            
        }
    }
)


//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}