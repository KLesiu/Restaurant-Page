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
    let myArrayText=["Find US!","Look at our delicious menu","Meet our TEAM"]
    for(let i=0;i<myArray.length;i++){
        const div=document.createElement("div")
        div.classList.add("section-glass")
        
        myArray[i].appendChild(div)
    }
    
    
}

export default buildMainSection
