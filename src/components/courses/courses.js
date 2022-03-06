import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { darasahuru, designs, elia1, group_people, phina, world } from '../images';
import { BiBrain } from 'react-icons/bi';
import { FaBriefcase, FaChevronRight, FaClock, FaCompass, FaCopyright, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
// import { logEvent } from 'firebase/analytics';
// import { analytics } from '../firebase';

function Courses({ selectCourse }) {
    const navigate = useNavigate();

    const courses = [
        {
            category: "Business",
            title: "Grow your business: Master customer relationships and marketing.",
            date: "October 15, 2021",
            duration: "20 mins",
            stars: 3,
            picture: designs
        },
        {
            category: "Earth",
            title: "How you can help to change Global Warming.",
            date: "January 15, 2022",
            duration: "10 mins",
            stars: 4,
            picture: world
        },
        {
            category: "Politics",
            title: "How to lead your people in a good way.",
            date: "January 21, 2022",
            duration: "45 mins",
            stars: 5,
            picture: group_people
        },
    ]

    // const show = () => {
    //     logEvent(analytics, "course_click");
    // }

    const courseClick = (course) => {
        // console.log(courses[course]);
        selectCourse(courses[course]);
        navigate("/course_description");
    };


    return <>
        <header id="header" className="d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <Link to="/"><img src={darasahuru} alt="" className="img-fluid" /></Link>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/">Log in</Link></li>
                        <li><Link to="/">Courses</Link></li>
                        <li><Link to="/">Sign up</Link></li>
                        <li><Link to="/">Forums</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main className="mt-5">

            {/* <!-- ======= What is Darasa Huru ======= --> */}
            <section className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 intro-img">
                            <img src={darasahuru} className="img-fluid" alt="" />
                            <Link to="#" className="play-btn mb-4"></Link>
                        </div>

                        <div className="col-lg-6 p-5">
                            <h4 className="title"><Link to="/">Get to know Darasa Huru</Link></h4>
                            <p>Darasa huru is a platform to help anyone to get knowledge of variety
                                of stuffs
                                going
                                on in the world
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End What is Darasa Huru --> */}

            <div className="mid_title">
                <h2 className="text-center">Top Rated Courses</h2>
            </div>

            {/* <!-- ======= Courses ======= --> */}
            <section className="wrapper">

                {/* <!-- Grow Business course --> */}
                {
                    courses.map((course, index) => (
                        // console.log(course["category"])
                        <div key={index}>
                            <div className="mb-5">
                                <div className="card text-white card-has-bg"
                                    style={{ backgroundImage: `url(${course["picture"]})` }}
                                    onClick={() => courseClick(index)}>
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2">{course["category"]}</small>
                                            <h4 className="card-title mt-0 "><Link to="/" className="text-white">{course["title"]}</Link></h4>
                                            <small><i className="bi bi-clock"></i>{course["date"]}</small>
                                        </div>
                                        <div className="card-footer">
                                            <div className="long">
                                                <i className="bi bi-stopwatch" style={{ fontSize: "2rem", color: "cornflowerblue" }}><FaClock color='white' /></i>
                                                <h6 className="my-0 text-white d-block">About {course["duration"]}</h6>
                                            </div>
                                            <div className="rated text-white">
                                                {
                                                    Array.from({ length: course["stars"] }, (e, i) => <span key={i}><FaStar /></span>)
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="extra">
                                    <Link to="/">See more {course["category"]} courses
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="more-course">
                    <Link to="/"> See more courses</Link>
                </div>
            </section>

            {/* <!-- ======= What to learn ======= --> */}
            <div className="mid_title">
                <h2 className="text-center">Not sure what to learn?
                    <i className="bx bx-confused"></i>
                </h2>
            </div>
            <section className="wrapper">

                <div className="row text-white p-3">
                    <div className="col-md-5 learn-what get-job ">
                        <i className="fs-1"><FaBriefcase /></i>
                        <h2>Get a job</h2>
                    </div>
                    <div className="col-md-5 learn-what rise-brain">
                        <i className="fs-1"><BiBrain /></i>
                        <h2>Increase your knowledge</h2>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-5 learn-what get-career">
                        <i className="fs-1"><FaGlobe /> </i>
                        <h2>Get a career</h2>
                    </div>
                    <div className="col-md-5 learn-what find-passion">
                        <i className="fs-1"><FaCompass /></i>
                        <h2>Find you passion</h2>
                    </div>
                </div>

            </section>


            {/* <!-- ====== Feedback ===== --> */}
            <div className="mid_title">
                <h2 className="text-center">Feedback from people benefited by Darasa Huru</h2>
            </div>
            <section className="wrapper">
                <div className="container">

                    <div className="feedback">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={elia1} className="avatar" alt="" />
                            </div>
                            <div className="col-md-8 comment p-4">
                                <h3>Elia Mkumbo</h3>
                                <h4>Software Engineer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Darasa huru is one of the best platform i have never seen. There is variety of courses
                                    to help you get want you want freely.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-circle"></i>Grow your business:
                                        Master customer relationships and marketing.</li>
                                    <li><i className="bi bi-check2-circle"></i> How you can help
                                        to change Global warming.</li>
                                    <li><i className="bi bi-check2-circle"></i> How to lead your People
                                        in a good way.</li>
                                </ul>
                                <p>These are just few of my favorite courses in Darasa huru</p>
                            </div>
                        </div>
                    </div>

                    <div className="feedback">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={phina} className="avatar" alt="" />
                            </div>
                            <div className="col-md-8 comment p-4">
                                <h3>Martha Mwandambo</h3>
                                <h4>Graphics Designer</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Darasa huru is the best in town. What i like the most is its
                                    challenges in courses. I use Darasa Huru most of my free time.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <ul>
                                    <li><i className="bi bi-check2-circle"></i>How to follow your dreams.</li>
                                    <li><i className="bi bi-check2-circle"></i> Grow your business: Master customer
                                        relationships and marketing.</li>
                                    <li><i className="bi bi-check2-circle"></i>Nail your public speaking skills.</li>
                                </ul>
                                <p>These are some of many favorite courses present in Darasa huru for free.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" >
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Our Newsletter</h4>
                            <p>Kindly fill your Email to join our newsletter to get updates about Darasa Huru</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i><FaChevronRight /></i> <Link to="/"> Home</Link></li>
                                <li><i><FaChevronRight /></i> <Link to="/"> About us</Link></li>
                                <li><i><FaChevronRight /></i> <Link to="/"> Terms of service</Link></li>
                                <li><i><FaChevronRight /></i> <Link to="/"> Privacy policy</Link></li>
                            </ul>
                        </div>


                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                07 Serengeti Street <br />
                                Tabata, Dar-es-salaam<br />
                                United Republic of Tanzania <br /><br />
                                <strong>Phone:</strong> +255 724 234 223<br />
                                <strong>Email:</strong> darasahuru@co.tz<br />
                            </p>

                        </div>

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h3>About Darasa Huru</h3>
                            <p>A platform created by patriotic Tanzanian youth.</p>
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

        {/* <!-- End Footer --> */}
    </>
}

export default Courses;
