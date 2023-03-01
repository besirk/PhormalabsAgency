import "./aboutus.css";
import { motion } from "framer-motion";
import Imagee from "../../assets/webite.webp";
import Service1 from "../../assets/Services/code.svg";
import Service2 from "../../assets/Services/presention-chart.svg";
import Service3 from "../../assets/Services/designtools.svg";
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
            icon: Service1,
            title: "Web Development",
            desc: "We will create websites using the latest trends in the industry. Our goal is to provide affordable and quality websites that exceed your expectations at a great value.",
        },
        {
            icon: Service2,
            title: "Social Media Marketing",
            desc: "If you want to reach out of your potential customers and grow in a bigger way, we would love to help you with your social media marketing. We are the right people for you!",
        },
        {
            icon: Service3,
            title: "Logo Design",
            desc: "Our design team can create incredible logos and branding for your business. With our years of experience, we will bring an elegant touch to your brand.",
        },
    ];

    return (
        <motion.div
            className="phormalabs__aboutus"
            variants={Container}
            initial="hidden"
            whileInView="show"
        >
            <div className="phormalabs__aboutus-content">
                <motion.h2
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    We make strategies, design & development to create valuable products.
                </motion.h2>
                <motion.p
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    Phormalabs helps businesses go digital with website creation,
                    marketing, branding, e-commerce, and more. We believe a strong online
                    presence is key to success.
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
                            <img src={service.icon} alt="Service Image" />
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
