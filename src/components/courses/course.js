import React, { useState } from 'react';
import { FaAnchor, FaArrowLeft, FaExclamation, FaHatCowboy, FaHome, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { darasahuru, leadership } from '../images';
import css from "./course.module.css"

function Course({ course }) {
    const [started, setStarted] = useState(false);
    const [open, setOpen] = useState(false);
    const [catego, setCatego] = useState();
    const [quiz, setQuiz] = useState(0);

    const handleOpen = (param) => {
        if (param === "started") {
            setCatego(0);
        } else if (param === "leader") {
            setCatego(1);
        } else if (param === "principle") {
            setCatego(2);
        } else if (param === "leading") {
            setCatego(3);
        }
        setOpen(!open);
    };

    const Morestarted = () => {
        return <>
            <div className={css.more}>
                <p>What is your name</p>
                <p>Where do you live</p>
                <p>What are you doing</p>
            </div>
        </>
    };
    const Moreleadership = () => {
        return <>
            <div className={css.more}>
                <p>what is leadership</p>
                <p>Where to get leadership</p>
                <p>leadership for everyone</p>
            </div>
        </>
    };
    const MorePrinciples = () => {
        return <>
            <div className={css.more}>
                <p>What are principles</p>
                <p>Principles guiding</p>
            </div>
        </>
    };
    const Moreleading = () => {
        return <>
            <div className={css.more}>
                <p>What are people</p>
                <p>What people likes</p>
                <p>Acting on people</p>
                <p>Why lead people</p>
            </div>
        </>
    };

    function Leading() {
        return <div>
            <div className='m-2'>
                <h3>Welcome to leadership course</h3>
                <div className={css.description}>
                    <p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                        quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p>
                    <p>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                        quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                    <p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                        quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p>
                </div>
                <div className={css.course_image}>
                    <img src={leadership} className="img-fluid" alt="leadership_image" />
                </div>
                <div className={css.bottom}>
                    <div className={css.icon_alert} >
                        <FaExclamation />
                    </div>
                    <div className={css.alert}>
                        <p>In this course will learn how to be great at leading your thing.</p>
                    </div>
                </div>
            </div>
            <div className={css.continue} onClick={() => setQuiz(1)}>
                <h4>Continue</h4>
            </div>
            {/* <button onClick={() => setStarted(!started)}>unstart</button> */}
        </div>;
    }

    function LeadingQuiz() {
        const correct = "Leadership is loving your people.";
        const options = [
            "Leadership is loving your people.",
            "Leadership is caring.",
            "Leadership is exploiting what people love."
        ]
        const pickAnswer = (param) => {
            if (options[param] === correct) {
                setStarted(!started);
                setQuiz(0);
            }
        };

        return <div>
            <div className='m-2'>
                <div className={css.quiz_description}>
                    <h3>What is leadership?</h3>
                </div>
                <div className={css.quiz_options}>
                    {
                        options.map((item, index) => (
                            <div key={index} className={css.quiz_option} onClick={() => pickAnswer(index)}>
                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <button onClick={() => setStarted(!started)}>unstart</button> */}
        </div>;
    }

    return <div>
        <header id={css.header} className="d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">
                <div className={css.logo}>
                    <a href="http://127.0.0.1:5501/index.html"><img src={darasahuru} alt="" className="img-fluid" /></a>
                </div>
                <nav id={css.navbar} className={css.navbar}>
                    <ul>
                        <li><Link to="/course_description"><FaArrowLeft size={20} /></Link></li>
                        <li><Link to="/"><FaHome size={20} /></Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main id={css.main}>
            {
                !started ?
                    <>
                        <div className={css.card}>
                            <h2>{course["title"]}</h2>
                        </div>
                        <div className={css.topics}>
                            <div className={css.topic} >
                                <div className={css.icon}>
                                    <FaPlay onClick={() => handleOpen("started")} />
                                </div>
                                <h2>Getting started</h2>
                            </div>
                            {open && catego === 0 ? <Morestarted /> : null}
                            <div className={css.topic}>
                                <div className={css.icon}>
                                    <FaPlay onClick={() => handleOpen("leader")} />
                                </div>
                                <h2>What is leadership</h2>
                            </div>
                            {open && catego === 1 ? <Moreleadership /> : null}
                            <div className={css.topic}>
                                <div className={css.icon}>
                                    <FaAnchor onClick={() => handleOpen("principle")} />
                                </div>
                                <h2>Principles of business</h2>
                            </div>
                            {open && catego === 2 ? <MorePrinciples /> : null}
                            <div className={css.topic}>
                                <div className={css.icon}>
                                    <FaHatCowboy onClick={() => handleOpen("leading")} />
                                </div>
                                <h2>Leading your people</h2>
                            </div>
                            {open && catego === 3 ? <Moreleading /> : null}
                            <button onClick={() => setStarted(!started)}>Start</button>
                        </div>
                    </>
                    :
                    {
                        0: <Leading />,
                        1: <LeadingQuiz />
                    }[quiz]
            }
        </main>
    </div>;
}

export default Course;
