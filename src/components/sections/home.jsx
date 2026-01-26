import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './hero';
import styles from './home.module.css';
import { FaChalkboardTeacher, FaBook, FaAward, FaLightbulb, FaUserGraduate, FaFileAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            {/* Hero Section */}
            <Hero />

            {/* About Preview Section */}
            <section className={styles.aboutSection}>
                <div className="container">
                    <div className={styles.aboutContainer}>
                        <h2 className={styles.sectionTitle}>About Me</h2>
                        <p className={styles.aboutContent}>
                            With over 21 years of experience in academia, I am dedicated to fostering excellence in the fields of Machine Learning and Artificial Intelligence. 
                            My journey is driven by a passion for research innovation and student mentorship, bridging the gap between theoretical concepts and practical applications.
                            As an Associate Professor, I strive to inspire the next generation of technologists through comprehensive teaching and hands-on guidance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Stats Section */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <FaChalkboardTeacher className={styles.statIcon} />
                            <span className={styles.statNumber}>21+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statCard}>
                            <FaFileAlt className={styles.statIcon} />
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Publications</span>
                        </div>
                        <div className={styles.statCard}>
                            <FaLightbulb className={styles.statIcon} />
                            <span className={styles.statNumber}>3</span>
                            <span className={styles.statLabel}>Patents</span>
                        </div>
                        <div className={styles.statCard}>
                            <FaAward className={styles.statIcon} />
                            <span className={styles.statNumber}>2</span>
                            <span className={styles.statLabel}>Funded Projects</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Books Section */}
            <section className={styles.booksSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Featured Publications</h2>
                    <p className={styles.aboutContent} style={{ marginBottom: '2rem' }}>
                        Authored textbooks contributing to the academic community.
                    </p>
                    <div className={styles.booksGrid}>
                        <div className={styles.bookCard}>
                            <FaBook className={styles.bookIcon} />
                            <h3 className={styles.bookTitle}>Python Programming- Practical Approach</h3>
                            <div className={styles.bookMeta}>
                                <span>2024</span>
                                <span>SIP International Publishers</span>
                            </div>
                            <p>ISBN: 978-93-6132-811-4</p>
                        </div>
                        <div className={styles.bookCard}>
                            <FaBook className={styles.bookIcon} />
                            <h3 className={styles.bookTitle}>Natural Language Processing: Principles And Applications</h3>
                            <div className={styles.bookMeta}>
                                <span>2024</span>
                            </div>
                            <p>ISBN: 978-93-7196-562-0</p>
                        </div>
                        <div className={styles.bookCard}>
                            <FaBook className={styles.bookIcon} />
                            <h3 className={styles.bookTitle}>Generative AI: Cyber security and Ethics</h3>
                            <div className={styles.bookMeta}>
                                <span>First Edition, 2025</span>
                            </div>
                            <p>ISBN: 9789371960038</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Interested in Collaboration?</h2>
                    <p className={styles.ctaText}>Always open to discussing research, workshops, and academic opportunities.</p>
                    <Link to="/cv" className={styles.ctaButton}>View Full Curriculum Vitae</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
