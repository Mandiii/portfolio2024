// import BannerImg from '../images/placeholderimg.png'
import ProjectsSlider from '../components/ProjectsSlider'
import Specialty from '../components/aboutComponents/Specialty'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import getProjects from '../services/getProjects'
import { Link } from 'react-router-dom'

function Home() {
    const [projects, setProjects] = useState([])
    const theme = useSelector((state) => state.theme.theme);
    const [specialties, setSpecialties] = useState([])


    // async function loadProjects() {
    //     try {
    //       setProjects(await getProjects());
    //       console.log(projects)
  
    //     } catch (error) {
    //       alert(error.message);
    //     }
    // }
    useEffect(() => {
        // loadProjects()
        fetch('/assets/projects.json')
            .then(res=>res.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
        console.log(projects)
        fetch('/assets/about.json')
            .then(res=>res.json())
            .then((data) => {
                console.log(data.specialties)
                setSpecialties(data.specialties)
            })
    },[])
    
    const specialtiesList = specialties.map(specialty => {
        return(
            <Specialty 
                key={specialty.id}
                title={specialty.title}
                projectTypes={specialty.projectTypes}
                img ={specialty.img}
            />
        )
    })
    const projectsPreview = projects.map(project => {
        console.log(projects)
        return(
            <Link to={`/${project.id}`} className='project-preview-container'>
                <div className='project-preview' key={project.id}>
                    <div className='text-part'>
                        <h3 className="title">{project.title}</h3>
                        <p className="description">{project.type}</p>
                        <button className="btn-secondary">More about this project</button>
                    </div>
                    <img src={project.coverImg} alt="" />
                </div>
            </Link>
        )
    })
    return (
        <main className={theme}>
            <div className="elegant-deco-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="home-banner">
                <div className="text-part">
                    <h1 ><span className='pre-title'>Mandi Gansauge</span> <br/>
                    Portfolio</h1>
                    <p></p>
                </div>
                {/* {theme==="elegant" && <img src={BannerImg} alt="" />} */}
            </div>

            <div className="specialties">
                <div className='specialties-container'>
                    {specialtiesList}
                </div>
                <Link to='/about' className='btn btn-primary-light'>About Me</Link>
                
            </div>
            
            {theme === "elegant" &&<section>
                {projects.length > 0 && (<ProjectsSlider projectList = {projects} />)}
            </section>}
            <section>
                {theme === "snow" &&<div>
                    <h2>Some of my projects </h2>
                    <div id='projects'>
                        {projectsPreview} 
                    </div>
                </div>}
                
                   
                {/* <h3 className='center'>Check out my entire portfolio</h3> */}
                {/* <div id='gallery-preview'>
                    <img src={projects[0].coverImg} alt={projects[0].title} />
                </div> */}
                <Link to='/portfolio' className='btn btn-primary-dark'>View entire portfolio</Link>
                
            </section>

        </main>
    )
    
}
export default Home