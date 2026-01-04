import styles from './course-materials.module.css';
import { FaYoutube } from 'react-icons/fa';


const courseMaterialsData = [
    {
        courseCode: '22AI43',
        courseName: 'DESIGN & ANALYSIS OF ALGORITHMS',
        semester: 'May/June 2026',
        files: [
            { name: 'LAB Manual', type: 'PDF', path: '/resources/22AI43_DAA LAB Manual-2024-25 -AIML.pdf' },
            { name: 'SYLLABUS', type: 'PDF', path: '/resources/4TH_SEM.pdf' },
            { name: 'NOTES', type: 'ZIP', path: '/resources/DAA NOTES.zip' },
        ]
    },
    {
        courseCode: '22AI34',
        courseName: 'DATA STRUCTURES AND ALGORITHMS',
        semester: 'Nov/Dec 2025',
        files: [
            { name: 'LAB Manual', type: 'PDF', path: '/resources/22AI34_DSA LAB Manual-2023-24.pdf' },
            { name: 'SYLLABUS', type: 'PDF', path: '/resources/22AI34_DSA LAB Manual-2023-24.pdf' },
            { name: 'NOTES', type: 'ZIP', path: '/resources/DSA NOTES.zip' },
        ]
    },
    {
        courseCode: '21AIL584',
        courseName: 'FULL STACK DEVELOPMENT',
        semester: 'May/June 2025',
        files: [
            { name: 'LAB Manual', type: 'PDF', path: '/resources/21AIL584_FSD-LAB MANUAL.pdf' },
            { name: 'SYLLABUS', type: 'PDF', path: '/resources/5TH SEM.pdf' },
        ]
    }
];

const CourseMaterials = () => {
    return (
        <section className="section container">
            <h1 className={styles.pageTitle}>Course Materials</h1>
            <p className={styles.introText}>
                Repository of course files, lecture notes, and other study materials.
            </p>

            <div style={{ marginBottom: '3rem', padding: '1rem' }}>
                <a
                    href="https://youtube.com/@reshmas2194?si=xAjZLJqkGmEE5GcJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FF0000', border: 'none' }}
                >
                    <FaYoutube size={20} /> Visit YouTube Channel for Video Lectures
                </a>
            </div>

            <div className={styles.materialsContainer}>
                {courseMaterialsData.map((course) => (
                    <div key={course.courseCode} className={styles.courseBlock}>
                        <div className={styles.courseHeader}>
                            <h2 className={styles.courseTitle}>
                                {course.courseCode}: {course.courseName}
                            </h2>
                            <span className={styles.semesterBadge}>{course.semester}</span>
                        </div>

                        <div className={styles.fileList}>
                            {course.files.map((file, index) => (
                                <div key={index} className={styles.fileItem}>
                                    <div className={styles.fileInfo}>
                                        <span className={styles.fileIcon}>📄</span>
                                        <span className={styles.fileName}>{file.name}</span>
                                    </div>
                                    <a href={file.path} download className={styles.downloadBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                        Download <span className={styles.fileType}>{file.type}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseMaterials;
