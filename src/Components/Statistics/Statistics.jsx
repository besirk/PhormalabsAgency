import "./statistics.css";
import {motion} from 'framer-motion'
const Statistics = () => {
    const stats = [
        {
            number: 20,
            sign: "+",
            txt: "Finished Projects",
        },
        {
            number: 20,
            sign: "+",
            txt: "Happy Clients",
        },
        {
            number: 20,
            sign: "k",
            txt: "Website Visitors",
        },
        {
            number: 99,
            sign: "%",
            txt: "Success Rate",
        },
    ];

    const Container = {
        hidden: { opacity: 0 },
        show: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren : 0.04 * i,
            },
        }),
    };
    const item = {
        hidden: { opacity: 0, y:-20, transition: {  type: 'spring', damping: 12, stiffness : 100 } },
        show: { opacity: 1, y:0, transition: {  type: 'spring', damping: 12, stiffness : 100 } },
    };


    return (
        <motion.div variants={Container} initial="hidden" whileInView="show" className="statisticsPadd" id="statistics">
            <div className="phormalabs__statistics ">
                <div className="phormalabs__statistics-content">
                    <motion.h2 variants={item}>Why Choose Us?</motion.h2>
                    <motion.p variants={item}>
                        We are not your <span style={{color: "rgba(28, 28, 30, 0.72)", fontWeight: "bold"}}>average agency</span>. We are a team of digital enthusiasts, creative masterminds, and strategic thinkers who are deeply immersed in the digital world.
                    </motion.p>
                    <motion.a variants={item} className="button custom-buttStat" href="#contact">
                        Get Started
                    </motion.a>
                </div>
                <motion.div  className="phormalabs__statistics-boxes">
                    {stats.map((stat, index) => (
                        <motion.div
                            variants={item}
                            className={`phormalabs__statistics_box box${index}`}
                            key={index}
                        >
                            <h1>
                                {stat.number}
                                {stat.sign}
                            </h1>
                            <p>{stat.txt}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Statistics;
