import github from './../assets/img/github.png';
import lazarof from './../assets/img/lazarof.png';
import linkdin from './../assets/img/linkdin.jpg';

export function About() {
    return <section className="about-view">
        <h1>About me</h1>
        <div className="about guy"><h2>Guy Lazarof</h2>
            <p>25 Years old Full Stack Developer. <br />
                Feel free to reach me via any of the links below.</p>
            <img className="profile" src={lazarof} alt="myPhoto" />
            <ul className="social">
                <li><a href="https://www.linkedin.com/in/guy-lazarof/">
                    <img className="profile linkdin" src={linkdin} alt="myPhoto" />
                </a></li>
                <li><a href="https://github.com/guy-lazarof"><img className="profile github" src={github} alt="myPhoto" /></a></li>
            </ul>
        </div>
    </section>
}
