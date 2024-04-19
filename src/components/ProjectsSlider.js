import { useState } from 'react'
import BannerImg from '../assets/placeholderimg.png'
import { Link } from 'react-router-dom'
function ProjectsSlider() {
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
    const [sliderIndex, setSliderIndex] = useState(0)
    const sliderItemsAmount = projects.length
    const sliderProject = projects[sliderIndex]

    function swipeSlider(direction) {
        if(sliderIndex === 0 && direction === -1){
            setSliderIndex(sliderItemsAmount-1)
        } else if(sliderIndex === sliderItemsAmount-1 && direction===1) {
            setSliderIndex(0)
        } else {
            setSliderIndex(prevSliderIndex => prevSliderIndex + direction)
        }
        
        console.log(sliderIndex)
    }
    return(
        <div className='project-slider'>
            <button className='slider-navigate prev' onClick={() => swipeSlider(-1)}>
                Previous
            </button>
            <button className='slider-navigate next' onClick={() => swipeSlider(1)}>
                Next
            </button>

            <img src={BannerImg} alt="" />
            <div className="sliderInfo">
                <p className="project-type pre-title">{sliderProject.type}</p>
                <h2 className="project-title">{sliderProject.title}</h2>
                <p className="project-description">{sliderProject.description}</p>
                <Link to={"/project/" + sliderProject.id}>View full project</Link>
            </div>

        </div>
    )
   
}
export default ProjectsSlider