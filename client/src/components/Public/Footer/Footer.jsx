import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <>
            <div style={{marginLeft:'3%',marginTop:"50px",width:"94%"}}>
                <div className='footer-container'>
                    <section className="footer-subscription">
                        <p className="footer-subscription-heading">
                            <b>Contact-Us</b>
                            <hr className="line"></hr>
                        </p>

                        {/*<p className="footer-subscription-text">*/}
                        {/*    You Can Reach Us at Any time  <i className="fas fa-phone"> </i> </p>*/}
                        <p> H2MD International School, Colombo-03 Kollupitiya, Sri Lanka</p>
                        <p>    Email: <b> h2md@school.lk </b>/ Hotline: <b>+94 11-459 5001</b>  </p>
                    </section>

                    <section className="social-media">
                        <div className="social-media-wrap">
                            <div className="footer-logo">
                                < Link to='/' className="social-logo">
                                    H2MD.
                                    <i className="fas fa-american-sign-language-interpreting">
                                    </i>
                                </  Link>
                            </div>

                            <small className="website-rights">
                                &copy;  H2MD, developed by H2MD Techs. All Rights Reserved
                            </small>

                            <div className="social-icon">
                                <Link
                                    className="social-icon-link facebook"
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'>
                                    <i className='fab fa-facebook-f'> </i>
                                </Link>

                                <Link
                                    className="social-icon-link instagram"
                                    to='/'
                                    target='_blank'
                                    aria-label='Instagram'>
                                    <i className="fab fa-instagram"> </i>
                                </Link>

                                <Link
                                    className="social-icon-link twitter"
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter' >
                                    <i className="fab fa-twitter"> </i>
                                </Link>

                                <Link
                                    className="social-icon-link Youtube"
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter' >
                                    <i className="fab fa-youtube"> </i>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            </>
        )
    }
}

export default Footer