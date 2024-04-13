import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="footer-container">
                        <div className="footer-body">
                            <div className="btn white spacing"><span><a href="/form">Contact Us</a></span></div>
                            <div className="footer-content">
                            <div className="footer-body-list-pages">
                                <h6 className="footer-body-list-title">Pages</h6>
                                <ul className="footer-menu-item">
                                    <li>About</li>
                                    <li>EZ SmartBoxes</li>
                                    <li>EZ SmartGrid</li>
                                </ul>
                            </div>
                            <div className="footer-body-list footer-body-list-socials">
                                <h6 className="footer-body-list-title">Social media</h6>
                                <div className="footer-menu">
                            <ul className="footer-menu-column">
                                <li>Telegram</li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                            </ul>
                            <ul className="footer-menu-column">
                                <li>Medium</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        </div>
                        <div className="footer-foot">
                            <div className="footer-foot-copyright">
                                <span>EZ Blockchain © 2022 All Rights Reserved </span>
                                <span><a href="#">Terms of service</a></span>
                            </div>
                            <div className="footer-foot-phone">
                                <span>+1 (888) 890-1516</span>
                            </div>
                            <div className="footer-foot-address">
                                <span>311 S Wacker Drive, Suite 1410, Chicago, IL 60606</span>
                            </div>
                            <div className="footer-foot-email">
                                <span>info@ezblockchain.net</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
