import './index.scss'
import MiniDot1 from "../MiniDot1/index.jsx";

function Main() {
    return (
        <div className={"col-12"}>
            <section id={"main"}>
                <h2>Rəqəmsal <span>Dünyada</span></h2>
                <h2>Realistik Həllər</h2>
                <h2>& Daha Çoxu</h2>
                <div className="whiteBanner">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        KREATİV DİZAYN
                        E-TİCARƏT <MiniDot1/>
                        <MiniDot1/> ui/ux <MiniDot1/> MARKETİNG <MiniDot1/> DİJİTALLAŞMA <MiniDot1/> BRENDİNQ <MiniDot1/>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        KREATİV DİZAYN
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <MiniDot1/>
                        DİJİTALLAŞMA
                        <MiniDot1/> ui/ux
                    </div>
                </div>
                <div className="blackBanner">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        KREATİV DİZAYN
                        <MiniDot1/> ui/ux <MiniDot1/> MARKETİNG <MiniDot1/> DİJİTALLAŞMA <MiniDot1/> BRENDİNQ <MiniDot1/>
                        E-TİCARƏT <MiniDot1/>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        KREATİV DİZAYN
                        <MiniDot1/> ui/ux <MiniDot1/> MARKETİNG <MiniDot1/> DİJİTALLAŞMA
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;