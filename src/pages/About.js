import { useEffect, useState } from 'react'
import mapLine from '../images/about-snow/map-line.svg'
import { useSelector } from 'react-redux'
function About() {

    const theme = useSelector((state) => state.theme.theme)
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        fetch('/assets/about.json')
            .then(res=>res.json())
            .then((data) => {
                console.log(data.languages)
                setLanguages(data.languages)
                console.log(languages)
            })
    },[])

    const languagesList = languages.map(language => {
        return(
            <div key={language.id}>
                <h3>{language.language}</h3>
                <p>{language.description}</p>
            </div>
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
            <section>
                <div className="about-banner">
                    <h1 ><span className='pre-title'>About Me</span> <br/>
                    Experience</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
            </div>
            </section>
            
            <section className="about-grid">
                
                <div className="about-timeline">
                    <div>
                        <h3>Prépa animation 2D</h3>
                        <p>Atelier de Sèvres</p>
                    </div>
                    {theme === "snow" && <img className='mapLine' src={mapLine}/>}
                    <div>
                        <h3>Formation graphiste</h3>
                        <p>Online-Schule für Gestaltung</p>
                    </div>
                    {theme === "snow" && <img className='mapLine' src={mapLine}/>}
                    <div>
                        <h3>Infographiste Metteur en Page</h3>
                        <p>AFPA Alençon</p>
                    </div>
                    {theme === "snow" && <img className='mapLine' src={mapLine}/>}
                    <div>
                        <h3>Graphiste Multimédia</h3>
                        <p>Icademie</p>
                    </div>
                    {theme === "snow" && <img className='mapLine' src={mapLine}/>}
                    <div>
                        <h3>Motion Designer</h3>
                        <p>Icademie</p>
                    </div>
                    {theme === "snow" && <img className='mapLine' src={mapLine}/>}
                    <div>
                        <h3>Intégrateur Front-end</h3>
                        <p>OpenClassrooms</p>
                    </div>
                    
                </div>

                <div className="about-text">
                    <h2><span className="pre-title">A little bit</span><br/>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus enim mi, vitae porttitor odio porttitor ac. Nulla ut neque ut enim varius aliquam nec a augue.</p>
                </div>

                <div className="spoken-languages">
                    <h2>Languages</h2>
                    <div className="languages-container">
                        {languagesList}
                    </div>
                    
                </div>
            </section>
    </main>
    )
    
}
export default About