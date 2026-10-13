import { Link, Outlet } from 'react-router-dom';
import'./Layout.css'

function Layout() {
return ( <div> <header className="header"> <h1>My Portfolio</h1>

            <nav>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/accordion">Accordion</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                
            </nav>
        </header>

        <main className="main">
            <Outlet />
        </main>

        <footer className="footer">
            <div className="footer-container">

                <div className="footer-box">
                    <h3>About Me</h3>
                    <p>
                        I'm Rahul Pre-Final Year of Computer Science and Enginnering in Muthayammal
                        Engineering College.
                    </p>

                    <div className="social">
                        <a href="https://www.facebook.com/">f</a>
                        <a href="https://www.linkedin.com/">in</a>
                        
                        <a href="https://github.com/">GH</a>
                    </div>
                </div>

                <div className="footer-box">
                    <h3>Useful Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/skills">My Skills</Link>
                    <Link to="/projects">My Projects</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>

                <div className="footer-box">
                    <h3>My Skills</h3>
                    <p>Java</p>
                    <p>Python</p>
                    <p>MERN Stack</p>
                    <p></p>
                </div>

                <div className="footer-box">
                    <h3>Contact Info</h3>
                    <p>📍 Namakkal, Tamil Nadu</p>
                    <p>📞 7339694452</p>
                    <p>✉️ rahulgk737@gmail.com</p>
                    <p>
                        <a href="https://github.com/">
                            GitHub Profile
                        </a>
                    </p>
                </div>

            </div>

            <div className="copyright">
                <p>Copyright © 2026 Rahul | All Rights Reserved</p>
            </div>
        </footer>
    </div>
);

}

export default Layout;