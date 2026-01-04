import styles from './courses.module.css';

const coursesData = [
    {
        id: 1,
        code: 'DMS',
        title: 'Discrete Mathematics Structures',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Mathematical structures including logic, sets, relations, functions, and graphs.'
    },
    {
        id: 2,
        code: 'DSA',
        title: 'Data Structures and Algorithms',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Study of data organization, storage, and algorithms for efficient access and modification.'
    },
    {
        id: 3,
        code: 'DAA',
        title: 'Design and Analysis of Algorithms',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Techniques for designing efficient algorithms and analyzing their complexity.'
    },
    {
        id: 4,
        code: 'OS',
        title: 'Operating Systems',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Core concepts of operating systems, process management, and memory management.'
    },
    {
        id: 5,
        code: 'DBMS',
        title: 'Database Management Systems',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Principles of database design, SQL, transaction management, and normalization.'
    },
    {
        id: 6,
        code: 'CN',
        title: 'Computer Networks',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Networking protocols, layers, architecture, and data communication standards.'
    },
    {
        id: 7,
        code: 'Applied AI',
        title: 'Applied Artificial Intelligence',
        level: 'Undergraduate/PG',
        semester: 'Various',
        description: 'Practical applications of AI technologies in real-world problem solving.'
    },
    {
        id: 8,
        code: 'FSD',
        title: 'Full Stack Development',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'End-to-end web development using modern front-end and back-end technologies.'
    },
    {
        id: 9,
        code: 'Python',
        title: 'Python Programming',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Comprehensive course on Python programming language and its libraries.'
    },
    {
        id: 10,
        code: 'Java',
        title: 'Java Programming',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Object-oriented programming concepts using Java language.'
    },
    {
        id: 11,
        code: 'C',
        title: 'C Programming',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Foundational programming concepts, pointers, memory management, and logic building.'
    },
    {
        id: 12,
        code: 'SE',
        title: 'Software Engineering',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Systematic approach to the development, operation, and maintenance of software.'
    },
    {
        id: 13,
        code: 'Testing',
        title: 'Software Testing',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Verification and validation techniques to ensure software quality and reliability.'
    },
    {
        id: 14,
        code: 'GT&C',
        title: 'Graph Theory and Combinatorics',
        level: 'Undergraduate',
        semester: 'Various',
        description: 'Study of graphs, counting techniques, and their applications in computer science.'
    }
];

const Courses = () => {
    return (
        <section className="section container">
            <h1 className={styles.pageTitle}>Courses Handled</h1>
            <p className={styles.introText}>
                A list of current and past courses taught at undergraduate level.
            </p>

            <div className={styles.courseGrid}>
                {coursesData.map((course) => (
                    <div key={course.id} className={styles.courseCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.courseCode}>{course.code}</span>
                            <span className={styles.courseLevel}>{course.level}</span>
                        </div>
                        <h3 className={styles.courseTitle}>{course.title}</h3>
                        <p className={styles.courseSemester}>{course.semester}</p>
                        <p className={styles.courseDescription}>{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
