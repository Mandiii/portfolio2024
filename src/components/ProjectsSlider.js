import { useState } from 'react'
import { Link } from 'react-router-dom'
function ProjectsSlider(props) {
    const projects = props.projectList
    console.log(projects)
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

            <div className='sliderImg'>
                <img src={sliderProject.coverImg} alt={sliderProject.title} />
            </div>
            <div className="sliderInfo">
                <h2 className="project-title"><span className='project-type pre-title'>{sliderProject.type}</span> <br/>{sliderProject.title}</h2>
                <p className="project-description">{sliderProject.description}</p>
                <Link className='btn-primary-light' to={"/" + sliderProject.id}>View full project</Link>
            </div>

        </div>
    )
   
}
export default ProjectsSlider