import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/cv" onClick={closeMenu}>CV / Profile</Link></li>
                    <li><Link to="/courses" onClick={closeMenu}>Courses</Link></li>
                    <li><Link to="/course-materials" onClick={closeMenu}>Course Materials</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
