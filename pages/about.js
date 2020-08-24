import Navbar from '../components/navbar'
import Card from 'react-bootstrap/card'

export default function About() {
    return (
        <div className="about">
            <Navbar />
            
            <div className="aboutCard">
                <Card style={{ width: '100%', background: 'rgba(255, 255, 255, 0.5)' }}>
                    <Card.Body>
                        <Card.Title>
                            <h1 className="whoNick">Who is Nick?</h1>
                            <hr/>
                        </Card.Title>
                        <Card.Text>
                            <h3 className="aboutText">I am a software developer, a husband, and a father.  </h3>
                            <h3 className="aboutText">I am passionate about helping people, and I love being able to use my talents to improve the lives of those around me.</h3>
                            <h3 className="aboutText">I have a background in the medical field where I was going to school to be a nurse until an injury prevented me from continuing that career path.</h3>
                            <h3 className="aboutText">More recently, I was a quality assurance laboratory technician at an aerospace manufaturing company.</h3>
                            <h3 className="aboutText">I have always had an eye for finding errors. Whether it's a movie scene with a minor plot hole, or an article with the wrong their/there/they're, I am quick to point out these kinds of things.  You might read this and think that I'm a glass half empty person, only seeing the bad in things...but I am the opposite. I see every error as an opportunity to make things better. </h3>
                            <h3 className="aboutText">After taking a few free coding courses online, I knew I was hooked and had to learn more. Coding is the perfect balance between problem solving when bugs occur, and being creative and inventive.  I have grown very passionate about it, and I am excited to use this new skill to impact the lives of others.  </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}