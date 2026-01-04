import styles from './cv.module.css';
import { FaGraduationCap, FaBook, FaAward, FaChalkboardTeacher, FaBriefcase, FaLightbulb, FaScroll, FaHandshake, FaUserTie } from 'react-icons/fa';

const CV = () => {
    return (
        <section className="section container">
            <div className={styles.header}>
                <div>
                    <h1 className={styles.pageTitle}>Dr. Reshma S</h1>
                    <p className={styles.designation}>Associate Professor</p>
                    <p className={styles.contactInfo}>
                        <a href="mailto:reshma-aiml@dayanandasagar.edu"><strong>Email:</strong> reshma-aiml@dayanandasagar.edu</a> <br />
                        <strong>Experience:</strong> 21 Years 7 Months
                    </p>
                </div>
                <div className={styles.socialLinks}>
                    <a href="https://scholar.google.com/citations?hl=en&user=5z-YP7AAAAAJ" target="_blank" rel="noopener noreferrer" className="btn">Google Scholar</a>
                    <a href="https://www.scopus.com/authid/detail.uri?authorId=57781227400" target="_blank" rel="noopener noreferrer" className="btn">Scopus</a>
                    <a href="https://orcid.org/0000-0002-3584-0021" target="_blank" rel="noopener noreferrer" className="btn">ORCID</a>
                </div>
            </div>

            <div className={styles.cvContainer}>
                {/* Left Column: Quick Info */}
                <div className={styles.leftColumn}>
                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaGraduationCap /> Education</h2>
                        <ul className={styles.listBasic}>
                            <li><strong>Ph.D.</strong></li>
                            <li><strong>M.Tech.</strong></li>
                            <li><strong>B.E.</strong></li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaLightbulb /> Area of Interest</h2>
                        <ul className={styles.skillsGrid}>
                            <li>Machine Learning</li>
                            <li>Artificial Intelligence</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaUserTie /> Memberships</h2>
                        <ul className={styles.listBasic}>
                            <li>CSI - I1502218 (Lifetime)</li>
                            <li>AMIEE - AMI/25/0779 (Lifetime)</li>
                            <li>ACM and ACMW</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaBook /> Text Books</h2>
                        <ul className={styles.listGap}>
                            <li>
                                <strong>Python Programming- Practical Approach</strong> <br />
                                ISBN: 978-93-6132-811-4 (2024) <br />
                                SIP International Publishers
                            </li>
                            <li>
                                <strong>Natural Language Processing: Principles And Applications</strong> <br />
                                ISBN: 978-93-7196-562-0 (2024)
                            </li>
                            <li>
                                <strong>Generative AI: Cyber security and Ethics</strong> <br />
                                ISBN: 9789371960038 (First Edition, 2025)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Detailed Info */}
                <div className={styles.rightColumn}>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaAward /> Patents</h2>
                        <ul className={styles.listGap}>
                            <li>
                                <strong>AI and IOT Based Automated Attendance System using Facial Recognition</strong> <br />
                                Published: 09/02/2024 (App No: 202441002586 A)
                            </li>
                            <li>
                                <strong>Nano Guardians: Transformative Microbots for Aquatic Ecosystem Restoration</strong> <br />
                                Published: 09/02/2024 (App No: 202441000967 A)
                            </li>
                            <li>
                                <strong>Deep Learning-Driven Virtual Tutor And Assistance System For Real-Time Student Support Using ChatGPT Technology</strong> <br />
                                Published: 02/08/2024 (App No: 202441056096 A)
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaBriefcase /> Grants & Funded Projects</h2>
                        <div className={styles.timelineItem}>
                            <h3>AI-Powered Intelligent Lecture Capture and Learning System</h3>
                            <p><strong>Funding Agency:</strong> Nuevera Infotech Pvt. Ltd.</p>
                            <p><strong>Amount:</strong> 14,40,000/- (2 Years)</p>
                            <p><strong>Role:</strong> Co-PI (Received 10% of total amount)</p>
                        </div>
                        <div className={styles.timelineItem} style={{ marginTop: '1rem' }}>
                            <h3>Polytechnic Internship (Consultancy)</h3>
                            <p><strong>Client:</strong> Govt. Polytechnic Harihara</p>
                            <p><strong>Amount:</strong> 72,000/- (4 months)</p>
                            <p><strong>Role:</strong> Mentor</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaHandshake /> MoU's & Industry Interaction</h2>
                        <ul className={styles.listBasic}>
                            <li>Coordinator for Signing MoU With “Nuevera Infotech Pvt. Ltd “on 27-09-2023.</li>
                            <li>Industry Internship: “One Month Industrial Internship on MERN Stack Development“ conducted by NITK STEP and PANTECH E LEARNING.</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaScroll /> Certifications</h2>
                        <ul className={styles.listBasic}>
                            <li>Certified Application Developer (ServiceNow) - 18/12/2023</li>
                            <li>Micro-Certification - Welcome to ServiceNow - 07/09/2023</li>
                            <li>Academic Instructor: Application Development Fundamentals (ServiceNow) - Since 22/08/2023</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}><FaChalkboardTeacher /> Resource Person</h2>
                        <ul className={styles.listGap}>
                            <li>Technical workshop on “R Programming” (S-VYASA University, Aug 2025).</li>
                            <li>Skill development program “Project based Machine Learning an Industry trend” (Govt. Polytechnic, Harihara, Dec 2024 - Mar 2025).</li>
                            <li>Technical workshop “Academics to Industry” (Govt Polytechnic, Harihara, Nov 2024).</li>
                            <li>Workshop “Code Fusion: Using Java Script” (BIET, Davangere, June 2024).</li>
                            <li>FDP on “Python and Krita Software” (Presidency Group of Schools, June 2024).</li>
                            <li>ServiceNow Training on SNAF, SSF and ADF (DSI, since July 2023).</li>
                            <li>National workshop “ML-Aided Aquatic Insight” (DSCE, Mar 2024).</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Selected Publications</h2>
                        <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-muted)' }}>Reviewer for multiple International Conferences, IEEE Conferences since 2024.</p>
                        <div className={styles.publicationList}>
                            <p>1. Shwetha, G. K., Argiddi, R. V., Avasthi, A., Reshma, S., & Kannan, R. (2025). Implementation of Neuro-Pharmaceutical Innovation in Eco-Friendly Drug Manufacturing. In Applications of Artificial Intelligence in Pharmaceuticals. IGI Global.</p>
                            <p>2. Reshma, S., et al. (2025). Innovative Implementation, Ethical Challenges, and Future Prospects of AI in Pharmaceuticals.</p>
                            <p>3. Sagar, R., Kumar, N. S., Sastry, A. S., Krishna, N., & Reshma, S. (2025). SHMADF: A Secure and Intelligent Framework for IoT-Enabled Healthcare Monitoring. Annals of Data Science.</p>
                            <p>4. Kumar, B. M., & Reshma, S. (2025). The Role of Machine Learning in Autonomous Driving. ICDAM 2025.</p>
                            <p>5. Ashwitha, A., Suresh, Y. V., Reshma, S., & Vanam, H. (2024). Task scheduling using glowworm-based optimal heterogeneous earliest finish time algorithm. IJIT (Q1).</p>
                            <p>6. Silambarasan, E., Suryawanshi, R., & Reshma, S. (2024). Enhanced cloud security: a novel intrusion detection system using ARSO algorithm. IJIT (Q1).</p>
                            <p>8. Reshma, S., Chennakesavulu, M., Patil, S. S., & Lamani, M. R. (2024). Efficient feature fusion model with modified bidirectional LSTM for automatic Parkinson's disease classification. IJIT (Q1).</p>
                            <p>9. Detection of Covid-19 using Deep Learning Techniques. TJ/JPT (Feb 2024) (Q3).</p>
                            <p>10. Optimized Controller Scheme for Autonomous Navigation in Infotainment on Internet-of-Vehicles. IJCNA-Q3 (2023).</p>
                            <p>11. Framework of Infotainment using Predictive Scheme for Traffic Management in Internet-of-Vehicle. IJACSA (2022) (Q3).</p>
                            <p>12. Advancement in infotainment system in automotive sector with vehicular cloud network. IJECE (2020) (Q2).</p>
                            <p>13. Framework for Infotainment System for Processing Massive Data Stream of Critical Online Services. IJITEE (2019) (Q3).</p>
                            <p>14. Analysis of Vanet Technologies. IJSER (2017).</p>
                            <p>15. Infotainment Frameworks for VANETS. IJCR (2016).</p>
                            <p>16. Shwetha, G. K., Argiddi, R. V., Avasthi, A., Reshma, S., & Kannan, R. (2025). Implementation of Neuro-Pharmaceutical Innovation in Eco-Friendly Drug Manufacturing.</p>
                            <p>17. Indian Patent: AI and IOT Based Automated Attendance System using Facial Recognition (2024).</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Workshops & Events Organized</h2>
                        <ul className={styles.listBasic}>
                            <li>2-day International Symposium (Oct 2025).</li>
                            <li>Entrepreneur Conclave (Nov 2024).</li>
                            <li>30 Days Masterclass on “Internet of Things” (Dec 2023 - Jan 2024).</li>
                            <li>ServiceNow Women Code to Win Contest 2024: Roadshow Event (Jan 2024).</li>
                            <li>FDP “ICT Unlocked- Innovative Teaching –Learning with AI-Driven Pedagogy” (Nov 2023).</li>
                            <li>21 days master class on “Amazon web services” (Oct 2023).</li>
                            <li>ISRO Industrial visit (June 2023).</li>
                            <li>National Level Hackathon “AVENTUS” (June 2023).</li>
                            <li>Inspirational Talk by Mr Suraj, IRS officer (June 2023).</li>
                            <li>2nd National Conference on “Engineering Applications of Emerging Technology” (June 2022).</li>
                            <li>5-day Workshop on “Corporate Java Training” (Nov 2021).</li>
                            <li>5-day FDP on “Computational Models for Machine Learning” (Sep-Oct 2021).</li>
                            <li>Self Learning Coding Challenge (Aug 2021).</li>
                            <li>International Conference On Green Computing & Internet Of Things (Aug 2018).</li>
                            <li>Technical Aptitude Training on Programming in C (March).</li>
                            <li>5-day FDP on “Big Data Analytics” (July 2016).</li>
                            <li>2 days workshop on “Data structures and pointers in C” (Feb 2016).</li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.sectionTitle}>Workshops & Seminars Attended</h2>
                        <ul className={styles.listBasic} style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                            <li>FDP on “Stepping into Emerging Technologies: Cybersecurity and AI/ML” (IIT Guwahati, Jan 2025).</li>
                            <li>NISP Funded FDP “Exploring Emerging Tech Frontiers” (Mar 2024).</li>
                            <li>Workshop on OBE Towards Education 4.0 (Feb 2024).</li>
                            <li>ATAL FDP on “Agile Software Evolution and Microservices Mastery” (Oct 2023).</li>
                            <li>FDP on “Deep Learning for NLP” (Sept 2023).</li>
                            <li>FDP on “Full Stack Application Development” with MS Azure (Sept 2023).</li>
                            <li>Workshop on “Adobe Academic Essentials” (Aug 2023).</li>
                            <li>ServiceNow Trainings: App Dev Fundamentals, Scripting, Admin Fundamentals (2023).</li>
                            <li>Expert talks on OBE (Dec 2023, Oct 2023).</li>
                            <li>FDP on “Master Math by Python” (Feb 2023).</li>
                            <li>FDP on “Recent Advancements in Machine Learning” (Jan 2023).</li>
                            <li>FDP on “Amazon Web Services” (Aug 2022).</li>
                            <li>FDP on “Feature Engineering in Data Science” (Aug 2021).</li>
                            <li>FDP on “Mobile Application Development” (March 2021).</li>
                            <li>ATAL FDP on “Data Science” (Sep 2020).</li>
                            <li>FDP on “Teaching-Learning and Evaluation” (Aug 2020).</li>
                            <li>FDP on “Data Analytics” (July 2020).</li>
                            <li>Webinar on “Angular Js To Web Apps Faster” (June 2020).</li>
                            <li>FDP on “A DevOps approach: Dockers in Blockchain” (June 2020).</li>
                            <li>Workshop on “Mobile App Dev & Machine Learning” (June 2020).</li>
                            <li>FDP on “AI & ML” (July 2019).</li>
                            <li>FDP on “Constructive Communication” (May 2019).</li>
                            <li>Skill enhancement program (Jan 2019).</li>
                            <li>Workshop on “React Native” (Nov 2018).</li>
                            <li>Workshop on “Biomedical Signal Processing” (June 2018).</li>
                            <li>Workshop on “Research Methodology” (July 2018).</li>
                            <li>FDP on “Machine Learning Algorithms” (Jan 2017).</li>
                            <li>Workshop on “ARM 7 and KEIL” (Jan 2017).</li>
                            <li>FDP on “Big Data And Hadoop Framework” (Jan 2015).</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CV;
