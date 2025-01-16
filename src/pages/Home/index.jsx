import './index.scss';
import {useState} from 'react';
import Navbar from "../../components/Navbar/index.jsx";
import OpenScene from "../../components/OpenScene/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import LeftBar from "../../components/LeftBar/index.jsx";
import Services from "../../components/Services/index.jsx";
import Contact from "../../components/Contact/index.jsx";
import Main from "../../components/Main/index.jsx";
import MiniDot1 from "../../components/MiniDot1/index.jsx";
import Portfolio from "../../components/Portfolio/index.jsx";
import AnimatedCursor from "react-animated-cursor";
// import * as cursoreffects from "cursor-effects";
// new cursoreffects.followingDotCursor({ color: ["#5B0C66"] });

function Home() {
    const [showOpenScene, setShowOpenScene] = useState(true);
    const [opacity, setOpacity] = useState(0);

    return (
        <section id="home">
            <AnimatedCursor
                innerSize={8} // İç halka boyutu
                outerSize={40} // Dış halka boyutu
                color="255,255,255, 0" // RGB renk
                outerAlpha={0.3} // Dış halkanın opaklığı
                innerScale={1} // İç halkanın ölçeği (hover etkisi için)
                outerScale={2} // Dış halkanın ölçeği (hover etkisi için)
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
                            outerScale: 5
                        }
                    }
                ]}
            />
            <video autoPlay muted loop id="background-video">
                <source src="/src/assets/video.mp4" type="video/mp4"/>
                Sizin brauzeriniz video tagını dəstəkləmir.
            </video>
            <div className="whiteBanner">
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    kreativ dizayn
                    <MiniDot1/> ui/ux <MiniDot1/> marketing <MiniDot1/> dijitallaşma <MiniDot1/> brendinq <MiniDot1/>
                    e-ticarət <MiniDot1/>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    kreativ dizayn
                </div>
            </div>
            <div className="blackBanner">
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    kreativ dizayn
                    <MiniDot1/> ui/ux <MiniDot1/> marketing <MiniDot1/> dijitallaşma <MiniDot1/> brendinq <MiniDot1/>
                    e-ticarət <MiniDot1/>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    kreativ dizayn
                    <MiniDot1/> ui/ux <MiniDot1/> marketing <MiniDot1/> dijitallaşma <MiniDot1/> brendinq <MiniDot1/>
                    e-ticarət <MiniDot1/>
                </div>
            </div>
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
                {/*{showOpenScene && <OpenScene/>}*/}
            </div>
        </section>
    );
}

export default Home;
