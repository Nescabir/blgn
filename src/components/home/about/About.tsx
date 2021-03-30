import './About.scss';

function About() {
    return (
        <div className="about" id="about">
            <div className="title">
                About me
            </div>
            <div className="container">
                <div className="table">
                    <div className="table-item">
                        Full name :
                    </div>
                    <div className="table-item">
                        Baptiste Boulongne
                    </div>
                    <div className="table-item">
                        Phone :
                    </div>
                    <div className="table-item">
                        +33 6 24 27 59 84
                    </div>
                    <div className="table-item">
                        Email :
                    </div>
                    <div className="table-item">
                        contact [at] bgln.dev
                    </div>
                    <div className="table-item">
                        Location :
                    </div>
                    <div className="table-item">
                        Grenoble, France
                    </div>
                    <div className="table-item">
                        Languages :
                    </div>
                    <div className="table-item">
                        French, English
                    </div>
                </div>
                <div className="text-zone">
                    <div className="greeting">
                        Hey !
                    </div>
                    <div className="description">
                        I am a full-stack developer located in France. I have been passionate about IT and gaming since my childhood, I always remember trying to hack, create and understand things. I found my way in back-end development in hope to work one day in the gaming industry.
                    </div>
                    <div className="description">
                        Hardworking, curious and perfectionnist. Tech and F1 enthusiast. Gamer at heart.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About