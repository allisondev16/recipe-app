import { Outlet, Link } from 'react-router-dom';

function Header() {

    return (
        <div>
            <header>
                <Link to="/"><h1>Tasty</h1></Link>
            </header>
            <Outlet />
        </div>
    )
}

export default Header;