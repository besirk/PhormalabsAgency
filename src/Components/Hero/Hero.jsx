import './hero.css';
import { motion } from 'framer-motion';
import HeroImg from '../../assets/heroPicture.webp';
import Suuber from '../../assets/partners/suuber_logo.png';
import Wpengine from '../../assets/partners/wpengine.png';
import Demogency from '../../assets/partners/demogency.webp';
import Typical from 'react-typical';
import Carousel from '../Carousel/Carousel';

const Hero = () => {

    const Container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                when: "beforeChildren",
                duration: 0.4,

            },
        },
    };
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3, } },
    };

    return (
        <>
            <motion.div variants={Container} initial="hidden" animate="show" className='phormalabs__hero section-padding'>
                <div className='phormalabs__hero-content '>
                    <motion.h1 variants={item} className='phormalabs__hero-content_header'>Like Steroids* <span>For Businesses</span>
                        
                    </motion.h1>
                    
                    <motion.p variants={item} className='text'>Getting high quality leads from your landing page is hard. We make it a whole lot easier, more predictable, less stressful, and more fun.</motion.p>
                    <motion.a variants={item} href="#contact" className='button'>Get Started</motion.a>
                </div>
                {/* <motion.img variants={item} src={HeroImg} alt="Hero image" className='phormalabs__hero-image' /> */}
            </motion.div>

            <motion.div className='phormalabs__proof' variants={Container} viewport={{ once: true }} initial="hidden" whileInView="show">
                <motion.h4 variants={item}>A few companies we've helped...</motion.h4>
                {/* <motion.p variants={item} >Here's some of our partners</motion.p> */}
                {/* <div className='phormalabs__proof-partners'>
                    <motion.img variants={item} src={Suuber} alt="suuber partner" />
                    <motion.img variants={item} src={Wpengine} alt="Wpengine partner" />
                    <motion.img variants={item} src={Demogency} alt="Demogency partner" />
                </div> */}
                <Carousel />
            </motion.div>
        </>
    )
}

export default Hero
