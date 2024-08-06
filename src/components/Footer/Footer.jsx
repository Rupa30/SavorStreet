import React from 'react'
import "./Footer.css"
import {assets} from "../../assets/assets"

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>SavorStreet.</h2>
                    <p>From street food to gourmet cuisine, SavorStreet is your go-to destination for all things delicious. Our passion for food knows no bounds, and we invite you to explore our collection of recipes, cooking tips, and food stories that will ignite your love for the culinary world.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-222-333-4444</li>
                        <li>contact@savorstreet.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © SavorStreet.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer