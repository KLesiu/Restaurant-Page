const buildSections=()=>{
    const glasses=document.querySelectorAll(".section-glass")
    const container=document.querySelector("#content")
    const main=document.querySelector("main")
    const home=document.querySelector("span")
    
    glasses.forEach(el=>el.addEventListener("click",(e)=>{
        container.removeChild(main)
        let option=e.target
        if(option==glasses[0]){
            const section=document.createElement("section")
            section.id="find-us"
const divMap=document.createElement("div")
divMap.classList.add("find-us__map")
const h2DivMap=document.createElement("h2")
h2DivMap.innerText="MAP"
const div=document.createElement("div")
div.innerText="PLACE FOR GOOGLE MAPS"
divMap.appendChild(h2DivMap)
divMap.appendChild(div);
const divInfo=document.createElement("div")
divInfo.classList.add("find-us__info")
const h2DivInfo=document.createElement("h2")
h2DivInfo.innerText="Contact"
const ulDivInfo=document.createElement("ul")
ulDivInfo.innerHTML=`<li>Address: First Street 32</li>
<li>Number: 532-122-111 </li>
<li>Opening-hours: 9<sup>00</sup>- 21<sup>00</sup></li>`
divInfo.appendChild(h2DivInfo)
divInfo.appendChild(ulDivInfo)
section.appendChild(divMap)
section.append(divInfo)
container.appendChild(section)
        }else if(option==glasses[1]){
            const sectionMenu=document.createElement("section")
sectionMenu.id="menu-page"
const h1SectionMenu=document.createElement("h1")
h1SectionMenu.innerText="MENU"


sectionMenu.appendChild(h1SectionMenu)
container.appendChild(sectionMenu)
        }else{
            const sectionTeam=document.createElement("section")
            sectionTeam.id="team-page"
            const imgChef=document.createElement("img")
            imgChef.src="img/chef.jpg"
            const divTeamInfo=document.createElement("div")
            divTeamInfo.classList.add("information")
            divTeamInfo.innerHTML=`<h3>Antonio Camellas</h3> <p>Hello, I am passionate about making pizza! I have done it since I was fourteen yahre old when my grandpa showed me how to make it </p>
            `
            sectionTeam.appendChild(imgChef)
            sectionTeam.appendChild(divTeamInfo)
            container.appendChild(sectionTeam)
        }

    }))
home.addEventListener("click",()=>{
    container.removeChild(container.lastChild)
    container.appendChild(main)
})

    

}
export default buildSections