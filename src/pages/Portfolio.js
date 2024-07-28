import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import getProjects from '../services/getProjects'
import placeholderImg from '../images/banner-illustration-snow.png'
import filterDesign from '../images/icons/filter-design.png'
import filterDev from '../images/icons/filter-dev.png'
import filterMotion from '../images/icons/filter-motion.png'

function Portfolio() {
    const [projects, setProjects] = useState([])
    const [projectsList, setprojectList] = useState([])
    const [sortType, setSortType] = useState("")

    // async function loadProjects() {
    //     try {
    //       setProjects(await getProjects());
    //       setprojectList(await getProjects())
  
    //     } catch (error) {
    //       alert(error.message);
    //     }
    // } 
    
    
    function updateProjectList(type) {
        console.log(sortType)
        console.log(type)
        if (sortType === type) {
            console.log(sortType, type)
            setSortType("")
            setprojectList(projects)
            console.log()
        } else {
            setSortType(type)
            console.log(sortType)
            
            setprojectList(prevProjectList => {
                return(
                    projects.filter((project) => {
                        return(project.sort === type)
                    })
                )        
            })
        }
        
    }
    useEffect(() => {
        // loadProjects()
        fetch('/assets/projects.json')
            .then(res=>res.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setprojectList(data)
                console.log(projects)    
                console.log(projects.length)  
            })
        console.log(projects)
        console.log(projectsList)
    },[])
    
    
    const renderedProjects = projectsList.map(project => {
        return(
            <Link to={`/${project.id}`} key={project.id}>
                <div className="project">
                    <img src={placeholderImg} alt="" />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            </Link>
        )
    })
    return (
        <main id='portfolio'>
            <div className='portfolio-banner'>
               <h1>Portfolio</h1>
                <p>Here you can find some projects that I've been working on.</p>
 
            </div>
            
            <section id='filters'>
                <h2>Filter by project type</h2>

                <div className="filters-container">
                    <button className={sortType==="design"? "active filterBtn" : "filterBtn"} onClick={() => updateProjectList("design")}>
                        <img src={filterDesign} alt="" />
                        <p>Graphic Design</p>
                    </button>
                    <button className={sortType==="motion"? "active filterBtn" : "filterBtn"} onClick={() => updateProjectList("motion")}>
                        <img src={filterMotion} alt="" />
                        <p>Motion Design</p>
                    </button>
                    <button className={sortType==="dev"? "active filterBtn" : "filterBtn"} onClick={() => updateProjectList("dev")}>
                        <img src={filterDev} alt="" />
                        <p>Front end</p>
                    </button>
                </div>

                {/* <div className="tags">
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
                </div> */}
            </section>
                
            <section id='projects-container'>
                {renderedProjects}
            </section>
        </main>
    )
    
}
export default Portfolio