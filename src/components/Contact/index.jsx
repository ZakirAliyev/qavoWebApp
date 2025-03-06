import './index.scss';
import {FaFacebook, FaWhatsapp} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

function Contact() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleHover = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const boxClasses = (index) => {
        if (activeIndex === null) return "col-4 col-md-6 col-sm-12 col-xs-12";
        return activeIndex === index ? `col-12 col-md-12 col-sm-12 col-xs-12 bg-${index}` : "col-4 col-md-6 col-sm-12 col-xs-12 d-none";
    };

    return (
        <div className="col-12">
            <section id="contact">
                <h2>AXTARDIĞIN PARTNİYOR BİZİK!</h2>
                <h3>Bizimlə əlaqəyə keç və rəqəmsalda uğurla addımla</h3>
                <div className="box">
                    <div className="row">
                        {[FaWhatsapp, HiOutlineMail, FaFacebook].map((Icon, index) => (
                            <div
                                key={index}
                                className={boxClasses(index)}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="box1">
                                    <a
                                        href={
                                            index === 0
                                                ? 'https://wa.me/+994102655952'
                                                : index === 1
                                                    ? 'mailto:example@example.com'
                                                    : index === 2
                                                        ? 'https://www.facebook.com/share/16DrUzzN8c/'
                                                        : '#'
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={activeIndex === index ? "" : "disabled-link"}
                                    >
                                        <Icon className="icon" />
                                        <span>
                                            {index === 0
                                                ? 'WhatsApp'
                                                : index === 1
                                                    ? 'Email'
                                                    : index === 2
                                                        ? 'Facebook'
                                                        : ''}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h3 className="h3">Bizimlə əlaqəyə keç və rəqəmsalda uğurla addımla</h3>
            </section>
        </div>
    );
}

export default Contact;
