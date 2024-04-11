import BannerImg from '../assets/placeholderimg.png'
import ProjectsSlider from '../components/ProjectsSlider'
import Specialty from '../components/aboutComponents/Specialty'
function Home() {
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
    return (
        <main className='elegant'>
            <div className="elegant-deco-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="banner">
                <div className="text-part">
                    <h1 ><span className='pre-title'>Mandi Gansauge</span> <br/>
                    Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
                </div>
                <img src={BannerImg} alt="" />
            </div>
            {specialtiesList}
            <ProjectsSlider />
        </main>
    )
    
}
export default Home