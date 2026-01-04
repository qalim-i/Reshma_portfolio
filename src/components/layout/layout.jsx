import Navbar from './navbar';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, marginTop: '0px' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
