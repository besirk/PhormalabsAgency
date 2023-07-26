import "./aboutus.css";
import { motion } from "framer-motion";
import Imagee from "../../assets/webite.webp";
import { faCode, faFeatherPointed, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutUs = () => {
    const Container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
        },
    };
    const item = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const services = [
        {
            icon: faCode,
            title: "Web Development",
            desc: "We are committed to delivering modern, high-quality websites that go beyond your expectations while maintaining a great value. We also do AI CHATBOTS",
        },
        {
            icon: faFeatherPointed,
            title: "Copywriting",
            desc: "Using the power of words to attract customers and leveraging their curiosity to drive purchases! ",
        },
        {
            icon: faPhotoFilm,
            title: "Content Creation",
            desc: "We're masters of content creation. We create captivating, purpose-driven content that not only grabs your audience's attention but also effectively communicates your brand's message.",
        },
    ];

    return (
        <motion.div
            className="phormalabs__aboutus"
            variants={Container}
            initial="hidden"
            whileInView="show"
            id="aboutus"
        >
            <div className="phormalabs__aboutus-content">
                <motion.h2
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    No Matter Your Business Size, We'll Help You Scale and Secure More Clients
                </motion.h2>
                <motion.p
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Phormalabs helps <span style={{fontWeight: 'bold', color: '#9333ea'}}>Contractors</span> and <span style={{fontWeight: 'bold', color: '#9333ea'}}>Solar Companies</span> go digital with website creation,
                    marketing, branding, e-commerce, and more. We believe a strong online
                    presence is key to success. */}
                    No matter the size of your business, Phormalabs is your partner in growth. We provide <span style={{fontWeight: 'bold', color: '#9333ea'}}>Contractors</span> and <span style={{fontWeight: 'bold', color: '#9333ea'}}>Solar Companies</span> with digital services, including website creation, marketing and Copywriting. With our help, you can amplify your online presence, scale efficiently, and secure more clients.
                </motion.p>
                <div className="phormalabs__aboutus-content_div">
                    {services.map((service, index) => (
                        <motion.div
                            variants={item}
                            viewport={{ once: true }}
                            initial="hidden"
                            whileInView="show"
                            key={index}
                            className={`phormalabs__aboutus-content_service`}
                        >
                            <FontAwesomeIcon icon={service.icon} className="icon" />
                            <div>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
                viewport={{ once: true }}
                src={Imagee}
                alt="About Us picture"
                className="phormalabs__aboutus-image"
            />
        </motion.div>
    );
};

export default AboutUs;
