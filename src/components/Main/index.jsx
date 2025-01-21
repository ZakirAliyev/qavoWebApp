import './index.scss'
import MiniDot1 from "../MiniDot1/index.jsx";

function Main() {
    return (
        <div className={"col-12"}>
            <section id={"main"}>
                <h2>Rəqəmsal.<span>Dünyada</span>.</h2>
                <h2>Realistik Həllər.</h2>
                <h2>& Daha Çoxu</h2>
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
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <MiniDot1/>
                        dijitallaşma
                        <MiniDot1/> ui/ux
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
                        <MiniDot1/> ui/ux <MiniDot1/> marketing <MiniDot1/> dijitallaşma
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;