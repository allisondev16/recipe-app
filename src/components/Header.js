import { Outlet, Link, useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit();
        navigate('/');
    }

    return (
        <div>
            <header>
                <nav className='container'>
                    <Link to="/"><h1>Tasty</h1></Link>
                    <form>
                        <input type="text" onChange={props.onChange} placeholder="Find a Recipe"></input>

                        <input type="submit" onClick={handleSubmit} value="Search"></input>
                    </form>
                </nav>

            </header>
            <Outlet />
        </div >
    )
}

export default Header;