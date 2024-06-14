import BannerImg from '../images/placeholderimg.png'
import ProjectsSlider from '../components/ProjectsSlider'
import Specialty from '../components/aboutComponents/Specialty'
import Button from '../components/Button'
function Home() {
    const projects = [
        {
            id: "project-name1",
            title: "Project title 1",
            type: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.",            
            img: ""
        },
        {
            id: "project-name2",
            title: "Project title 2",
            type: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.",            
            img: ""
        },
        {
            id: "project-name3",
            title: "Project title 3",
            type: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.",
            img: ""
        }
    ]
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
        return(
            <div className='project-preview' key={project.id}>
                <div className='text-part'>
                    <h3 className="title">{project.title}</h3>
                    <p className="description">{project.type}</p>
                    <button className="btn-secondary">More about this project</button>
                </div>
                <img src={BannerImg} alt="" />
            </div>
        )
    })
    return (
        <main className='snow'>
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
                {/* <img src={BannerImg} alt="" /> */}
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
            
            
            {/* <ProjectsSlider /> */}
            <section>
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
                
                
            </section>
        </main>
    )
    
}
export default Home