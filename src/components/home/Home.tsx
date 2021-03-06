import './Home.scss';
import Intro from './intro/Intro';
import About from './about/About';
import Skills from './skills/Skills';

function Home() {
    return (
        <div className="home">
            <Intro />
            <Skills />
            <About />
        </div>
    );
}

export default Home