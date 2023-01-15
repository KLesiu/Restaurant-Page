const buildSections=()=>{
    const glasses=document.querySelectorAll(".section-glass")
    const container=document.querySelector("#content")
    const main=document.querySelector("main")
    
    glasses.forEach(el=>el.addEventListener("click",(e)=>{
        
        let option=e.target
        if(option==glasses[0]){
            
        }else if(option==glasses[1]){
            
        }else{
            
        }

    }))


    container.removeChild(main)

}
export default buildSections