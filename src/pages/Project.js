import image from "../images/project/logo-ludum.png";
import char1 from "../images/project/viking.png";
import char2 from "../images/project/astronaut.png";
import char3 from "../images/project/granny.png";
import char4 from "../images/project/plague.png";
import char5 from "../images/project/witch-cat.png";
import crypt from "../images/project/crypt.png";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
function Project() {

        const {id} = useParams()    
        const [currentProject, setCurrentProject] = useState()
        const navigate = useNavigate()
    
        useEffect(()=> {
            fetch('/projects.json')
                .then(res=>res.json())
                .then((data) => {
                    console.log(data)
                    const project = data.find(project => project.id === id)
                    // if(project === undefined) {
                    //     navigate("./NoPage")
                    // }
                    setCurrentProject(project)          
                })
        },[])
        function createTags() {
            return(currentProject.tags.map((tag, index) =>
                <span>{tag}</span>
            ))
        }  
        if (currentProject === undefined) {
            return null
        }
    return (
        <main className="project">
            <div className="titleBanner">
                <div className="text-part">
                    <p className="pre-title">Graphic design project</p>
                    <h1>Project Title</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
                    <div className="tags">
                        <span>Illustration</span>
                        <span>Games</span>
                        <span>UI Design</span>
                    </div>
                    <div className="infos">
                        <p>October 2023</p>
                        <p>3 days</p>
                        <p>Personnal Project</p>
                    </div>
                    <p className="pre-title">Project constraints</p>
                    <ul><b>Theme : </b>Limited Space</ul>
                    <ul><b>Time limit : </b>3 days</ul>
                </div>
                <img src={image} alt="" />
            </div>

            <section>
                <h2>Characters</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
                <div className="image-row">
                    <img src={char1} alt="" />
                    <img src={char2} alt="" />
                    <img src={char3} alt="" />
                    <img src={char4} alt="" />
                    <img src={char5} alt="" />
                </div>
            </section>

            <section className="side-img">
                <div>
                    <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.  </p>
                </div>
                <img src={crypt} alt="" />
                
            </section>
                
        </main>
    )
    
}
export default Project