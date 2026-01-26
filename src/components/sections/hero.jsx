import { Link } from 'react-router-dom';
import styles from './hero.module.css';
import reshma from '../../assets/reshma.png';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Dr. <span className={styles.highlight}>Reshma S</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        Associate Professor
                    </h2>
                    <p className={styles.bio}>
                        B.E., M.Tech., Ph.D | Experience: 21 Years 7 Months<br />
                        Specializing in Machine Learning and Artificial Intelligence.<br />
                        Dedicated to fostering academic excellence and research innovation.
                    </p>
                    <div className={styles.actions}>
                        <Link to="/cv" className="btn btn-primary">View Full Profile</Link>
                        <Link to="/courses" className="btn btn-primary">View Courses</Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.placeholderImage}>
                        <img src={reshma} alt="Dr. Reshma S" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
