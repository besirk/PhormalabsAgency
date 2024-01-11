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
            title: "Landing Pages",
            desc: "Our high-converting landing pages make your visitors give their wallet to you.",
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
                    Phormalabs helps <span style={{fontWeight: 'bold', color: '#9333ea'}}>Contractors</span> and <span style={{fontWeight: 'bold', color: '#9333ea'}}>Solar Companies</span> go digital with website creation,
                    marketing, branding, e-commerce, and more. We believe a strong online
                    presence is key to success. 
                    You're probably worried about where your next customer will come from. Stressed and sleeping like a two-year-old. And to top it all of you're being pulled to a million and one directions. Should I change this color, should I change the text, etc... <br/><br/>

                    <b>STOP IT!</b> Let us help you!
                    <br/><br/>
                    We help <span style={{fontWeight: 'bold', color: '#9333ea'}}>Coaches</span>, <span style={{fontWeight: 'bold', color: '#9333ea'}}>Consultants</span> and <span style={{fontWeight: 'bold', color: '#9333ea'}}>Service Providers</span> add $30k+ to their revenue in 45 days, using our proven landing page template that captures high quality leads. 
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
