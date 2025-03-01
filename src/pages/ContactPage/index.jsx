import './index.scss'
import Navbar from "../../components/Navbar/index.jsx";
import video1 from "../../assets/video.webm";
import Footer from "../../components/Footer/index.jsx";

function ContactPage() {


    return (
        <section id={"contactPage"}>
            <video autoPlay muted loop id="background-video" style={{width: '100%', height: '100vh'}}>
                <source src={video1} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            <div className="container1">
                <Navbar/>
                <div className="row" style={{marginTop: '80px'}}>
                    <div className={"wrapper111"}>
                        <form>
                            <div className={"row"}>
                                <div className={"box col-7 col-md-7 col-sm-12 col-xs-12"}>
                                    <div className={"row"}>
                                        <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                                            <div className={"inputWrapper"}>
                                                <label>Ad, Soyad</label>
                                                <input placeholder={"Ad, Soyad daxil edin..."}/>
                                            </div>
                                        </div>
                                        <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                                            <div className={"inputWrapper"}>
                                                <label>Email</label>
                                                <input placeholder={"Mailinizi daxil edin..."}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                                            <div className={"inputWrapper"}>
                                                <label>Mesaj</label>
                                                <textarea rows={5} placeholder={"Mesajınızı qeyd edin"}/>
                                            </div>
                                        </div>
                                        <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                                            <div className={"inputWrapper"}>
                                                <label>Əlaqə nömrəsi</label>
                                                <input placeholder={"(+994) XX XXX-XX-XX"}/>
                                                <button>Göndər</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"line"}></div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"box col-3 col-md-3 col-sm-12 col-xs-12"} style={{
                                            width: 'max-content'
                                        }}>
                                            <h3>Telefon</h3>
                                            <h4><a href={"tel:0102441828"}>010 2441828</a></h4>
                                        </div>
                                        <div className={"box col-3 col-md-3 col-sm-12 col-xs-12"}>
                                            <h3>E-mail</h3>
                                            <h4><a href={"mailto:info@qavo.agency"}>info@qavo.agency</a></h4>
                                        </div>
                                        <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                                            <h3>E-mail</h3>
                                            <h4>Azərbaycan, Bakı şəhəri, Nərimanov rayonu, Aşığ Mola cümə küçəsi
                                                47b</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className={"box col-5 col-md-5 col-sm-12 col-xs-12"}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12151.553468224563!2d49.84801437002094!3d40.41132374304449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063aa515792e5%3A0xda413cf31449a17a!2sAK%C4%B0AB%20MMC!5e0!3m2!1saz!2saz!4v1739192553010!5m2!1saz!2saz"
                                        width="600" height="450" style={{
                                        border: 0
                                    }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default ContactPage;