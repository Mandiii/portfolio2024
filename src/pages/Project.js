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
                console.log(project)      
            })
    },[])
    // function createTags() {
    //     return(projectContent.tags.map((tag, index) =>
    //         <span>{tag}</span>
    //     ))
    // } 
    // const flexImages =  (projectContent.flexRow.images.map((image) => 
    //         <img key={image} src={process.env.PUBLIC_URL + image} />
    //     ))
    // const listItems =  (projectContent.list.listElements.map((li) => 
    //             <li key={li.id}>{li.text}</li>
    //         ))
     
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
                    </div>
                    <div className="infos">
                        <p>{projectContent.date}</p>
                        <p>{projectContent.duration}</p>
                        <p>{projectContent.context}</p>
                    </div>
                    <p className="pre-title">{projectContent.list.listTitle}</p>
                    <ul>
                        <li>{projectContent.list.listElements[0].text}</li>
                        <li>{projectContent.list.listElements[1].text}</li>
                    </ul>
                </div>
                <img src={process.env.PUBLIC_URL + projectContent.coverImg} alt={projectContent.title} />
            </div>

            {/* {projectContent.flexRow && <section>
                <h2>{projectContent.flexRow.title}</h2>
                <p>{projectContent.flexRow.description}</p>
                <div className="image-row">
                {flexImages}
                </div>
            </section>} */}

            {/* <section className="side-img">
                <div>
                    <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.  </p>
                </div>
                <img src={crypt} alt="" />
                
            </section> */}`
            <section className="fullwidth">
                <img src={process.env.PUBLIC_URL + projectContent.fullImg} />
            </section>
            {projectContent.button && <a href={projectContent.button.link} target="_blanc" className="btn btn-neutral">{projectContent.button.text}</a>}
                
        </main>
    )
    
}
export default Project