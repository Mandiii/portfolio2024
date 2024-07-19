import BannerImg from '../images/placeholderimg.png'
import ProjectsSlider from '../components/ProjectsSlider'
import Specialty from '../components/aboutComponents/Specialty'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import getProjects from '../services/getProjects'
import { Link } from 'react-router-dom'

function Home() {
    const [projects, setProjects] = useState([])
    const theme = useSelector((state) => state.theme.theme);
    console.log(theme)


    async function loadProjects() {
        try {
          setProjects(await getProjects());
          console.log(projects)
  
        } catch (error) {
          alert(error.message);
        }
    }
    useEffect(() => {
        loadProjects()
        console.log(projects)
    },[])
    
    // const projects = [
    //     {
    //         id: "66803b75be04255cabf521dc",
    //         title: "Project title 1",
    //         type: "Design",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.",            
    //         img: ""
    //     },
    //     {
    //         id: "project-name2",
    //         title: "Project title 2",
    //         type: "Design",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.",            
    //         img: ""
    //     },
    //     {
    //         id: "project-name3",
    //         title: "Project title 3",
    //         type: "Design",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.",
    //         img: ""
    //     }
    // ]
    const specialties = [
        {
            id:0,
            title: "Graphic Design",
            projectTypes: [
                "Visual brand identity",
                "UI Design",
                "Print & Layout design",
                "Illustration"
            ],
        },
        {
            id:1,
            title: "Motion Design",
            projectTypes: [
                "Logo Animation",
                "Explainer video",
                "Character animation"
            ],
        },
        {
            id:2,
            title: "Front end dev",
            projectTypes: [
                "Front end integration",
                "Responsive design",
                "Website animations"
            ],
        }
    ]
    const specialtiesList = specialties.map(specialty => {
        return(
            <Specialty 
                key={specialty.id}
                title={specialty.title}
                projectTypes={specialty.projectTypes}
            />
        )
    })
    const projectsPreview = projects.map(project => {
        console.log(projects)
        return(
            <Link to={`/${project._id}`} className='project-preview-container'>
                <div className='project-preview' key={project._id}>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
                </div>
                {theme==="elegant" && <img src={BannerImg} alt="" />}
            </div>

            <div className="specialties">
                <div className='specialties-container'>
                    {specialtiesList}
                </div>
                <Button 
                    btnText="About Me"
                    btnClass="btn-primary-light"
                />
                
            </div>
            
            
            {projects.length > 0 && (<ProjectsSlider projectList = {projects} />)}
            {theme === "snow" && <section>
                <h2>Some of my projects </h2>
                <div id='projects'>
                   {projectsPreview} 
                   
                    <h3>Check out my entire portfolio</h3>
                    <div id='gallery-preview'>
                        <img src={BannerImg} alt="" />
                        <img src={BannerImg} alt="" />
                        <img src={BannerImg} alt="" />
                        <img src={BannerImg} alt="" />
                        <img src={BannerImg} alt="" />
                   </div>
                </div>
                <Button 
                    btnText="View entire portfolio"
                    btnClass="btn-primary-light"
                />
                
                
            </section>}

        </main>
    )
    
}
export default Home