const buildMainSection=()=>{
    const section=document.querySelector(".menu")
    const location=document.createElement("div")
    location.classList.add("location")
    const ourmenu=document.createElement("div")
    ourmenu.classList.add("ourmenu")
    const aboutUs=document.createElement("div")
    aboutUs.classList.add("about-us")
    section.appendChild(location)
    section.appendChild(ourmenu)
    section.appendChild(aboutUs)
    let myArray=[location,ourmenu,aboutUs]
    let myArrayText=["Find US!","MENU","TEAM"]
    for(let i=0;i<myArray.length;i++){
        const div=document.createElement("div")
        div.classList.add("section-glass")
        myArray[i].appendChild(div)
    }
    const glasses=document.querySelectorAll(".section-glass")
    glasses.forEach(el=>el.addEventListener("mouseover",(e)=>{
        
        let option=e.target
        if(option==glasses[0]){
            option.innerText=myArrayText[0]
        }else if(option==glasses[1]){
            option.innerText=myArrayText[1]
        }else{
            option.innerText=myArrayText[2]
        }
    }))
    glasses.forEach(el=>el.addEventListener("mouseout",(e)=>{
        let option=e.target
        if(option==glasses[0]){
            option.innerText=""
        }else if(option==glasses[1]){
            option.innerText=""
        }else{
            option.innerText=""
        }
    }))
    
}


export default buildMainSection

