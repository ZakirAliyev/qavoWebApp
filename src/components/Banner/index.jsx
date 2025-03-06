import './index.scss'
import {useNavigate} from "react-router";

function Banner() {

    const navigate = useNavigate();

    return (
        <div className={"col-12"}>
            <section id={"banner"}>
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/rNbM6GiceCc?si=x4DnT9i4isOsGLYy"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className={"button"}>
                    <button onClick={() => {
                        navigate('/contact')
                    }}>ƏLAQƏYƏ KEÇ
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Banner;
