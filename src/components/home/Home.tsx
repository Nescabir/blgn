import Intro from './intro/Intro';
import About from './about/About';
import Skills from './skills/Skills';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <Intro />
            <About />
            <Skills />
        </div>
    );
}

export default Home