import icon from '../images/icons/design-specialty.svg'
function About() {
    return (
        <main className="snow">
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
                    <div>
                        <h3>Formation graphiste</h3>
                        <p>Online-Schule für Gestaltung</p>
                    </div>
                    <div>
                        <h3>Infographiste Metteur en Page</h3>
                        <p>AFPA Alençon</p>
                    </div>
                    <div>
                        <h3>Graphiste Multimédia</h3>
                        <p>Icademie</p>
                    </div>
                    <div>
                        <h3>Motion Designer</h3>
                        <p>Icademie</p>
                    </div>
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
                        <div>
                            <h3>English</h3>
                            <p>Description</p>
                        </div>
                        <div>
                            <h3>English</h3>
                            <p>Description</p>
                        </div>
                        <div>
                            <h3>English</h3>
                            <p>Description</p>
                        </div>
                        <div>
                            <h3>English</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    
                </div>
            </section>
    </main>
    )
    
}
export default About