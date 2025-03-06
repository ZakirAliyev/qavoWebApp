import './index.scss';
import Navbar from "../../components/Navbar/index.jsx";
import video1 from "../../assets/video.webm";
import Footer from "../../components/Footer/index.jsx";
import AnimatedCursor from "react-animated-cursor";
import {useEffect, useState} from "react";

function ContactPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [smtpLoaded, setSmtpLoaded] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    // Debounce fonksiyonunu useEffect’ten önce tanımlıyoruz.
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    useEffect(() => {
        // SMTP.js script'ini dinamik olarak ekleyelim
        const script = document.createElement('script');
        script.src = "https://smtpjs.com/v3/smtp.js";
        script.async = true;
        script.onload = () => {
            // Script yüklendiğinde Email nesnesinin global scope'ta mevcut olduğundan emin olabiliriz.
            setSmtpLoaded(true);
        };
        document.body.appendChild(script);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const debounceResize = debounce(handleResize, 200);
        window.addEventListener("resize", debounceResize);

        return () => {
            window.removeEventListener("resize", debounceResize);
            document.body.removeChild(script);
        };
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else {
            // Basit email validasyonu için regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Invalid email address';
            }
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        if (smtpLoaded && window.Email) {
            Email.send({
                Host: "s1.maildns.net",
                Username: "qavoagency",
                Password: "Qavo2025!",
                To: 'aliyevzakir814@gmail.com',
                From: "gulcohrsultanov@gmail.com",
                Subject: "This is the subject",
                Body: "And this is the body"
            }).then(
                message => alert(message)
            );
        } else {
            alert("SMTP.js henüz yüklenmedi. Lütfen daha sonra tekrar deneyin.");
        }

        console.log("Email sent successfully: ", JSON.stringify(formData, null, 2));
    };

    return (
        <section id="contactPage">
            {/* SMTP.js'i render kısmında eklemeye gerek yok, useEffect üzerinden yüklüyoruz */}
            {!isMobile && (
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
            )}
            <video autoPlay muted loop id="background-video" style={{width: '100%', height: '100vh'}}>
                <source src={video1} type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            <div className="container1">
                <Navbar/>
                <div className="row" style={{marginTop: '80px'}}>
                    <div className="wrapper111">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="box col-7 col-md-7 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="box col-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="inputWrapper">
                                                <label>Ad, Soyad</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Ad, Soyad daxil edin..."
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="box col-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="inputWrapper">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Mailinizi daxil edin..."
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && (
                                                    <span style={{color: 'red', fontSize: '12px'}}>{errors.email}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="box col-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="inputWrapper">
                                                <label>Mesaj</label>
                                                <textarea
                                                    rows={5}
                                                    name="message"
                                                    placeholder="Mesajınızı qeyd edin"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="box col-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="inputWrapper">
                                                <label>Əlaqə nömrəsi</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="(+994) XX XXX-XX-XX"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                <button type="submit">Göndər</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="line"></div>
                                    </div>
                                    <div className="row">
                                        <div className="box col-3 col-md-3 col-sm-12 col-xs-12"
                                             style={{width: 'max-content'}}>
                                            <h3>Telefon</h3>
                                            <h4>
                                                <a href="tel:0102441828">010 2441828</a>
                                            </h4>
                                        </div>
                                        <div className="box col-3 col-md-3 col-sm-12 col-xs-12">
                                            <h3>E-mail</h3>
                                            <h4>
                                                <a href="mailto:info@qavo.agency">info@qavo.agency</a>
                                            </h4>
                                        </div>
                                        <div className="box col-6 col-md-6 col-sm-12 col-xs-12">
                                            <h3>Adres</h3>
                                            <h4>
                                                Azərbaycan, Bakı şəhəri, Nərimanov rayonu, Aşığ Mola cümə küçəsi 47b
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="box col-5 col-md-5 col-sm-12 col-xs-12">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8963153737773!2d49.85555347668948!3d40.411147671440474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d003436b447%3A0xb8c6c13c52985f63!2sQAVO%20MMC!5e0!3m2!1str!2saz!4v1741265367580!5m2!1str!2saz"
                                        width="600" height="450" style={{
                                        border:0
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
