import React from 'react';
import { BiBrain, BiMailSend, BiStar, BiTime } from 'react-icons/bi';
import { FaArrowLeft, FaChevronRight, FaCopyright, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhoneAlt, FaStar, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { darasahuru } from './images';
import css from "./course.module.css";

function Course({ course }) {
    return <>
        <header id={css.header} className="d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">
                <div className={css.logo}>
                    <Link to="/"><img src={darasahuru} alt="" className="img-fluid" /></Link>
                </div>
                <nav id={css.navbar} className={css.navbar}>
                    <ul>
                        <li><Link to="/"><FaArrowLeft size={20} /></Link></li>
                        <li><Link to="/"><FaHome size={20} /></Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            {/* Intro */}
            <section className='intro' id={css.intro}>
                <h1>{course["title"]}</h1>
                <div className="intro-img">
                    <img src={course["picture"]} alt={course["title"]} className="img-fluid" />
                    <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="play-btn mb-4"></Link>
                </div>
                <div className={css.ratings}>
                    <div>
                        <BiTime />
                        <p>Suggested time: {course["duration"]}</p>
                    </div>
                    <div>
                        {
                            Array.from({ length: course["stars"] }, (e, i) => <span key={i}><FaStar /></span>)
                        }
                        <p>{course["stars"]} stars rated by course takers</p>
                    </div>
                </div>
            </section>

            <div className={css.joint}>
                <h2>Start learning</h2>
                <FaChevronRight size={30} />
            </div>

            <section className='my-4'>
                <h3>Course description</h3>
                <div id={css.description}>
                    <hr />
                    <p>
                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
                        laboriosam eius aut nostrum quidem aliquid dicta.
                        Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                        quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                    </p>
                </div>
            </section>

            <section className='my-4'>
                <div className={css.what_to_learn}>
                    <BiBrain size={30} />
                    <h3 className='mx-3'>What you will learn</h3>
                </div>
                <hr />
                <div className={css.what_to_learn_list}>
                    <p>1. How to manage your business </p>
                    <p>2. Concepts to control your business workflow</p>
                    <p>3. Managing your income for the business</p>
                </div>
            </section>

            <section className='my-4'>
                <h3>What others say about this course</h3>
                <hr />
                <div className={css.what_to_learn_list}>
                    <div>
                        <p className='fst-italic fw-bold'>"This is so cool"</p>
                        <p className='fs-6 fw-light'>-Anna Mwansa, Tanzania</p>
                    </div>
                    <div>
                        <p className='fst-italic fw-bold'>
                            "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                            quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
                        </p>
                        <p className='fs-6 fw-light'>-Lebron James, USA</p>
                    </div>
                    <div>
                        <p className='fst-italic fw-bold'>
                            "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                            quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
                        </p>
                        <p className='fs-6 fw-light'>-Mark paul, London</p>
                    </div>
                    <p className='extra'><Link to={"/"}>Read all reviews</Link></p>
                </div>
            </section>

            <div className={css.joint}>
                <h2>Start the course right now</h2>
                <FaChevronRight size={30} />
            </div>
        </main>

        <footer id="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Kindly send us Feedback</h4>
                            <p>Send us feedback on our Email</p>
                        </div>
                        <div className={`${css.email} col-lg-6`}>
                            <a href="mailto:mkumboelia@gmail.com"><button>Send Feedback</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                07 Serengeti Street <br />
                                Tabata, Dar-es-salaam<br />
                                United Republic of Tanzania <br /><br />
                                <strong><FaPhoneAlt size={20} /></strong> +255 724 234 223<br />
                                <strong><BiMailSend size={20} /></strong> darasahuru@co.tz<br />
                            </p>

                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Share Darasa Huru with friends</h4>
                            <div className="social-links mt-3">
                                <Link to="/"><i><FaTwitter /></i></Link>
                                <Link to="/"><i><FaFacebook /></i></Link>
                                <Link to="/"><i><FaInstagram /></i></Link>
                                <Link to="/"><i><FaLinkedin /></i></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Stay in touch with us</h4>
                            <div className="social-links mt-3">
                                <Link to="/"><i><FaTwitter /></i></Link>
                                <Link to="/"><i><FaFacebook /></i></Link>
                                <Link to="/"><i><FaInstagram /></i></Link>
                                <Link to="/"><i><FaLinkedin /></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    <FaCopyright /> Copyright <strong><span>Darasa Huru</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    </>;
}

export default Course;
