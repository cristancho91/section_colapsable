
let colapsable = document.getElementsByClassName("colapsable");

for(let i = 0; i< colapsable.length; i++){
    // console.log(colapsable[i]);
    colapsable[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let contenido = this.nextElementSibling;

        if(contenido.style.display === "block"){
            contenido.style.display = "none";
        }else{
            contenido.style.display= "block";
        }
    })
}