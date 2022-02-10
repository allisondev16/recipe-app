import { Outlet, Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

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
                    <form className='search'>
                        <input className='search__input' type="text" onChange={props.onChange} placeholder="Find a Recipe"></input>

                        <button className='search__icon' onClick={handleSubmit}><SearchIcon /></button>

                        {/* <input type="submit" onClick={handleSubmit}></input> */}


                    </form>
                </nav>

            </header>
            <Outlet />
        </div >
    )
}

export default Header;