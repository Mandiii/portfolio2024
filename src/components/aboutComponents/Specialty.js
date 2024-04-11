function Specialty(props) {
    const projectTypesList = props.projectTypes.map(projectType => <li>{projectType}</li>)
    return(
        <div className="specialty">
            <div className="specialty-title">
                {props.iconSrc && <img src={props.iconSrc} alt="" />}
                <h2>{props.title}</h2>
            </div>
            <div>
                <p>Types of projects</p>
                <ul>
                    {projectTypesList}
                </ul>
            </div>
                  
        </div>
    )
    
}
export default Specialty