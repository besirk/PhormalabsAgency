import './hero.css';
import { motion } from 'framer-motion';
import HeroImg from '../../assets/heroPicture.webp';
import Suuber from '../../assets/partners/suuber_logo.png';
import Wpengine from '../../assets/partners/wpengine.png';
import Demogency from '../../assets/partners/demogency.webp';

const Hero = () => {

    const Container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                when: "beforeChildren",

            },
        },
    };
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5, } },
    };

    return (
        <>
            <motion.div variants={Container} initial="hidden" animate="show" className='phormalabs__hero section-padding'>
                <div className='phormalabs__hero-content '>
                    <motion.h1 variants={item}>Digitalize your Business</motion.h1>
                    <motion.p variants={item}>Ready to take your brand on a journey of digital success? Let's create a unique digital strategy that sets you apart from the competition and delivers measurable results.</motion.p>
                    <motion.a variants={item} href="#contact" className='button'>Get Started</motion.a>
                </div>

                <motion.img variants={item} src={HeroImg} alt="Hero image" className='phormalabs__hero-image' />

            </motion.div>
            <div className='phormalabs__proof'>
                <h4>Who Keeps Trust on Us</h4>
                <p>Here's some of our partners</p>
                <div className='phormalabs__proof-partners'>
                    <img src={Suuber} alt="suuber partner" />
                    <img src={Wpengine} alt="Wpengine partner" />
                    <img src={Demogency} alt="Demogency partner" />

                </div>
            </div>
        </>
    )
}

export default Hero
