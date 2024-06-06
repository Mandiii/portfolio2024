import icon from '../../images/icons/design-specialty.svg'
function Specialty(props) {
    const projectTypesList = props.projectTypes.map((projectType, index) => <li key={index}>{projectType}</li>)
    return(
        <div className="specialty">
            <div className="specialty-title">
                {/* {props.iconSrc && <img src={props.iconSrc} alt="" />} */}
                <img src={icon} alt="" />
                <h3 className='large-title'>{props.title}</h3>
                <p>See more</p>
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