import crypt from "../images/project/crypt.png";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function Project() {

    const {id} = useParams()    
    const [projectContent, setProjectContent] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        fetch('/assets/projects.json')
            .then(res=>res.json())
            .then((data) => {
                console.log(data)
                const project = data.find(project => project.id === id)
                if(project === undefined) {
                    navigate("./ErrorPage")
                }
                setProjectContent(project)         
            })
    },[])
    // function createTags() {
    //     return(projectContent.tags.map((tag, index) =>
    //         <span>{tag}</span>
    //     ))
    // }  
    if (projectContent === undefined) {
        return null
    }
    return (
        <main className="project">
            <div className="titleBanner">
                <div className="text-part">
                    <p className="pre-title">Graphic design project</p>
                    <h1>{projectContent.title}</h1>
                    <p className="description">{projectContent.description}</p>
                    <div className="tags">
                        {/* {createTags()} */}
                    </div>
                    <div className="infos">
                        <p>{projectContent.date}</p>
                        <p>3 days</p>
                        <p>Personnal Project</p>
                    </div>
                    <p className="pre-title">Project constraints</p>
                    <ul><b>Theme : </b>Limited Space</ul>
                    <ul><b>Time limit : </b>3 days</ul>
                </div>
                <img src="" alt="" />
            </div>

            {projectContent.flexRow && <section>
                <h2>{projectContent.flexRow.title}</h2>
                <p>{projectContent.flexRow.description}</p>
                <div className="image-row">
                    <img src={projectContent.flexRow.images[3]} alt="" />
                </div>
            </section>}

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