import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faGoogle, faInstagram, faLinkedin, faGithub,
    faGem, // Diamond icon
    faHome, // Home icon
    faEnvelope, // Envelope icon
    faPhone, // Phone icon 
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-white text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                   
                    <Link to="" className="me-4 link-secondary">
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                    <Link to="https://www.instagram.com/bhushan_chanore/?igshid=ZGUzMzM3NWJiOQ%3D%3D" className="me-4 link-secondary">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to="https://www.linkedin.com/in/bhushan-chanore-843377235/" className="me-4 link-secondary">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link to="https://github.com/Bhushan-chanore" className="me-4 link-secondary">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>ISTA FOOD
                            </h6>
                            <p>
                                This website is not a clone of any website just try to add all user friendly things to buy online food...
                               <br/> website desined :  Bhushan chanore  source code uploaded on my github
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Famous Products</h6>
                            <p>
                                <Link to="#!" className="text-reset">Chicken</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">Fish</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">Panner</Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">Barbeque</Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">COUNTRIES</h6>
                            <p>
                                INDIA
                            </p>
                            <p>
                                MALDIVES
                            </p>
                            <p>
                                RUSSIA
                            </p>
                            <p>
                                THAILAND
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3 text-secondary"></i> Nagpur , 440002 , IN</p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                chabhushan16@gmail.com
                            </p>
                            <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
                © 2023 Copyright:
                <Link className="text-reset fw-bold" to="https://www.instagram.com/bhushan_chanore/?igshid=ZGUzMzM3NWJiOQ%3D%3D">WEB-DESINER BC</Link>
            </div>
        </footer>
    )
}

export default Footer;
