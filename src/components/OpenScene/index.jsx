import './index.scss'
import image1 from "/src/assets/openCenter.png"

function OpenScene() {
    return (
        <section id={"openScene"}>
            <div className={"wrapper"}>
                <img src={image1} alt={"Image"}/>
            </div>
        </section>
    );
}

export default OpenScene;