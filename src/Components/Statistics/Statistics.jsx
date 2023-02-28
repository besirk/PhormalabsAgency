import "./statistics.css";

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
    return (
        <div className="statisticsPadd">
            <div className="phormalabs__statistics ">
                <div className="phormalabs__statistics-content">
                    <h1>Let's Get in this Together</h1>
                    <p>
                        Ready to take your brand on a journey of digital success? Let's
                        create a unique digital strategy that sets you apart from the
                        competition and delivers measurable results.
                    </p>
                    <a className="button" href="#">
                        Get Started
                    </a>
                </div>
                <div className="phormalabs__statistics-boxes">
                    {stats.map((stat, index) => (
                        <div
                            className={`phormalabs__statistics_box box${index}`}
                            key={index}
                        >
                            <h1>
                                {stat.number}
                                {stat.sign}
                            </h1>
                            <p>{stat.txt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
