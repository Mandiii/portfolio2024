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
                    <p>I initially started  with studying graphic design, but in each of the courses I did there was a short chapter about HTML and CSS and I always really enjoyed it. I then decided to study front end integration to be able to design a web page and code it myself. I also did an apprenticeship in motion design for a year where I learnt to create animated ads and explainer videos. Since then I've been an apprentice at a web agengy doing all sorts of tasks from design to character animations to web integration.</p>
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
                        <h3>Graphic design course</h3>
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
                    <p>I love designing things, from game characters to websites, and now that I understand how web integration works I am able to keep in that in mind while designing which makes it much easier to integrate. I also really enjoy illustration and character design.</p>
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