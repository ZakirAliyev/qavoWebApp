import './index.scss';
import {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/index.jsx";
import OpenScene from "../../components/OpenScene/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import LeftBar from "../../components/LeftBar/index.jsx";
import Services from "../../components/Services/index.jsx";
import Contact from "../../components/Contact/index.jsx";
import Main from "../../components/Main/index.jsx";
import Portfolio from "../../components/Portfolio/index.jsx";
import AnimatedCursor from "react-animated-cursor";
import video1 from "/src/assets/video.mp4"

function Home() {
    const [showOpenScene, setShowOpenScene] = useState(true);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const audio = document.getElementById("background-audio");
        if (audio) {
            audio.loop = true;
            audio.play()
        }
    }, []);


    return (
        <section id="home">
            <AnimatedCursor
                innerSize={8}
                outerSize={40}
                color="255,255,255, 0"
                outerAlpha={0.3}
                innerScale={1}
                outerScale={2}
                outerStyle={{
                    border: "2px solid rgb(255,255,255)",
                    borderRadius: "50%",
                }}
                innerStyle={{
                    backgroundColor: "rgb(255,255,255)",
                    borderRadius: "50%",
                }}
                clickables={[
                    'a',
                    'Link',
                    'h2',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    {
                        target: '.custom',
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: '255, 255, 255',
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5,
                        },
                    },
                ]}
            />
            <video autoPlay muted loop id="background-video">
                <source src={video1} type="video/mp4"/>
                Sizin brauzeriniz video tagını dəstəkləmir.
            </video>
            <audio id="background-audio">
                <source
                    src="https://exposite-001-site1.ntempurl.com/files/pictures/85098dd6-f600-4b0d-a7b3-bcafbc092aa8.mp3"
                    type="audio/mpeg"
                />
            </audio>
            <div className="container">
                <Navbar style={{opacity}}/>
                <div className="row" style={{marginTop: '80px'}}>
                    <LeftBar/>
                    <div className="col-11 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <Main/>
                            <Banner/>
                            <Portfolio/>
                            <Services/>
                            <Contact/>
                        </div>
                    </div>
                </div>
                {showOpenScene ? <OpenScene/> : <></>}
            </div>
        </section>
    );
}

export default Home;
