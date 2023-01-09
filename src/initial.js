
const buildBasicLayout=()=>{
    const container=document.querySelector("#content")
    const header=document.createElement("header")
    const glassForHeader=document.createElement("div")
    glassForHeader.classList.add("glass");
    glassForHeader.innerHTML="<h1>Boss Pizza</h1> <h2>The best pizza in your city. </h2>"
    header.appendChild(glassForHeader)
    container.appendChild(header)
    const main=document.createElement("main")
    const sectionMenu=document.createElement("section")
    sectionMenu.classList.add("menu")
    const h1Main=document.createElement("h1")
    main.appendChild(h1Main)
    main.appendChild(sectionMenu)
    container.appendChild(main)
}
export default buildBasicLayout