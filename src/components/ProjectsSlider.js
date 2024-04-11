import BannerImg from '../assets/placeholderimg.png'
import { Link } from 'react-router-dom'
function ProjectsSlider() {
    return(
        <div className='project-slider'>
            <button className='slider-navigate'>
                Previous
            </button>
            <button className='slider-navigate'>
                Next
            </button>

            <img src={BannerImg} alt="" />
            <div className="sliderInfo">
                <p className="project-type pre-title">Website layout design</p>
                <h2 className="project-title">Art Showcase Website</h2>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
                <Link to='/project'>View full project</Link>
            </div>

        </div>
    )
    
}
export default ProjectsSlider