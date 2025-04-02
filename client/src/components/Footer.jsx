import React from 'react'
import '../style/Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer-content">
            <div className="footer-section">
                <h3>PyChallenger</h3>
                <p>Learn Python programming through interactive challenges and real-world problems.</p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Resources</h3>
                <ul className="footer-links">
                <li>
                    <a href="#">Documentation</a>
                </li>
                <li>
                    <a href="#">Tutorials</a>
                </li>
                <li>
                    <a href="#">API Reference</a>
                </li>
                <li>
                    <a href="#">Community Forum</a>
                </li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <ul className="footer-links">
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Feedback</a>
                </li>
                <li>
                    <a href="#">Report a Bug</a>
                </li>
                </ul>
            </div>
            </div>
            <div className="copyright">© 2025 PyChallenger. All rights reserved.</div>
        </div>
    </footer>

    </>
  )
}

export default Footer
