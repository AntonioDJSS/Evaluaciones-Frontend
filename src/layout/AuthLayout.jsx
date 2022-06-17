import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <>
        <div className='fondo'>
            <main className="container mx-auto md:grid md:grid-cols-1 items-center">
                <Outlet />
            </main>
            </div>
        </>
    );
};

export default AuthLayout;