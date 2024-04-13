import React, { Component } from "react";

export default class FooterForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-form">
                    <div className="footer-form-container">
                    <div className="btn white spacing"><span><a href="/">Go Back</a></span></div>
                        <form className="footer-form-content">
                            <div className="footer-form-description">
                                EZ Blockchain believes that modern technologies and hard teamwork can significantly benefit energy
                                businesses and reduce CO2 emissions.<br />
                                Let's talk about how we can do it together.
                            </div>
                            <div>
                                <label className="footer-form-input">
                                    <span>Get in touch with us</span>
                                    <input type="text" name="name" placeholder="Full name" className="name" data-type="text" />
                                </label>
                                <div className="footer-form-input footer-form-input__double">
                                    <label>
                                        <input type="text" placeholder="Company name" className="company" data-type="company" />
                                    </label>
                                    <label>
                                        <input type="tel" placeholder="Phone number" className="phone" data-type="phone" />
                                    </label>
                                </div>
                                <label className="footer-form-input">
                                    <input type="email" placeholder="Email" className="mail" data-type="mail" />
                                </label>
                                <label className="footer-form-input footer-form-input__row">
                                    <span>Type of request</span>
                                    <div className="custom-dropdown custom-dropdown-request typeOfRequest" data-type="typeOfRequest">
                                        <div className="selected" data-value="">
                                            <span>Choose type of request</span>
                                        </div>
                                        <div className="variants">
                                            <span>Request for a Support Specialist</span>
                                            <span>B2B request</span>
                                            <span>Career opportunities</span>
                                            <span>Other</span>
                                        </div>
                                    </div>
                                </label>
                                <label className="footer-form-input-text-about-you">
                                    <span>Tell us about the project</span>
                                    <textarea placeholder="Description of the project" className="message" data-type="message"></textarea>
                                </label>
                                <div className="footer-form-input footer-form-input__dragdrop">
                                    <span>Attachments</span>
                                    <label id="dragndrop">
                                        <input type="file" name="files" id="files" />
                                        <span id="dragndrop-label">Browse Files <span>or drag & drop files here</span></span>
                                        <div className="note-message">You can upload *.pdf, *.doc, *.docx, *.png, *jpg, *.gif, max 15Mb</div>
                                    </label>
                                </div>
                            </div>
                            <button className="footer-form-send">
                                <div>send</div>
                            </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
