import { Outlet, Link } from 'react-router-dom';

function Header(props) {

    return (
        <div>
            <header>
                <nav>
                    <Link to="/"><h1>Tasty</h1></Link>
                    <form>
                        <input type="text" onChange={props.onChange} placeholder="Find a Recipe"></input>

                        <input type="submit" onClick={props.onClick} value="Search"></input>
                    </form>
                </nav>

            </header>
            <Outlet />
        </div >
    )
}

export default Header;