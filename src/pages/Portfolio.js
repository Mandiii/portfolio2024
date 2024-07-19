import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getProjects from '../services/getProjects'
import placeholderImg from '../images/banner-illustration-snow.png'
import filterDesign from '../images/icons/filter-design.png'
import filterDev from '../images/icons/filter-dev.png'
import filterMotion from '../images/icons/filter-motion.png'

function Portfolio() {
    const [projects, setProjects] = useState([])

    async function loadProjects() {
        try {
          setProjects(await getProjects());
  
        } catch (error) {
          alert(error.message);
        }
    }
    useEffect(() => {
        loadProjects()
        console.log(projects)
    },[])
    
    const [projectsList, setprojectList] = useState(projects)
    const [sortType, setSortType] = useState("")
    
    const updateProjectList = () => {
        setprojectList(prevProjectList => {
            return(
                prevProjectList.filter((project) => {
                    return(project.type === sortType)
                })
            )        
    })
    }
    
    
    const  renderedProjects= projects.map(project => {
        return(
            <Link to={`/${project._id}`} >
                <div className="project">
                    <img src={placeholderImg} width="250px" alt="" />
                    <h2>{project.title}</h2>
                    <p>{project.type}</p>
                </div>
            </Link>
        )
    })
    return (
        <main id='portfolio'>
            <h1>Portfolio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>

            <section>
                <div className="filters">
                <button className="filterBtn" onClick={() => setSortType("design")}>
                    <img src={filterDesign} alt="" />
                    <p>Graphic Design</p>
                </button>
                <button className="filterBtn" onClick={() => setSortType("motion")}>
                    <img src={filterMotion} alt="" />
                    <p>Motion Design</p>
                </button>
                <button className="filterBtn" onClick={() => setSortType("Front end")}>
                    <img src={filterDev} alt="" />
                    <p>Front end</p>
                </button>
            </div>

            <div className="tags">
                <div>
                   <input type="checkbox" name="illustration"/>
                   <label htmlFor="illustration">Illustration</label>
                </div>
                <div>
                   <input type="checkbox" name="uiDesign" id="" />
                   <label htmlFor="uiDesign">UI Design</label>
                </div>
                <div>
                   <input type="checkbox" name="illustration"/>
                   <label htmlFor="illustration">React</label>
                </div>
                <div>
                   <input type="checkbox" name="uiDesign" id="" />
                   <label htmlFor="uiDesign">Games</label>
                </div>
            </div>
            </section>
                
            <section id='projects-container'>
                {renderedProjects}
            </section>
        </main>
    )
    
}
export default Portfolio