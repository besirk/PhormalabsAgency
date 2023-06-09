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
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren",
                duration: 0.3,

            },
        },
    };
    const item = {
        hidden: { opacity: 0, x:-100},
        show: { opacity: 1, x:0, transition: {  type: 'spring' } },
    };


    return (
        <motion.div variants={Container} initial="hidden" whileInView="show" className="statisticsPadd" id="statistics">
            <div className="phormalabs__statistics ">
                <div className="phormalabs__statistics-content">
                    <motion.h1 variants={item}>Let's Get in this Together</motion.h1>
                    <motion.p variants={item}>
                        Ready to take your brand on a journey of digital success? Let's
                        create a unique digital strategy that sets you apart from the
                        competition and delivers measurable results.
                    </motion.p>
                    <motion.a variants={item} className="button custom-buttStat" href="#">
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
