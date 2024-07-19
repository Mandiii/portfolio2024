import { useSelector } from 'react-redux'
import icon from '../../images/icons/design-specialty.svg'
function Specialty(props) {
    const projectTypesList = props.projectTypes.map((projectType, index) => <li key={index}>{projectType}</li>)
    const theme = useSelector((state) => state.theme.theme);
    return(
        <div className="specialty">
            <div className="specialty-title">
                {theme === "snow" && <img src={icon} alt="" />}
                <h3 className='large-title'>{props.title}</h3>
                {theme === "snow" && <p>See more</p>}
            </div>
            <div className='types-of-projects'>
                <p><b>Types of projects</b></p>
                <ul>
                    {projectTypesList}
                </ul>
            </div>
                  
        </div>
    )
    
}
export default Specialty