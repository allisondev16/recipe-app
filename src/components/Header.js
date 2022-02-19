import { Outlet, Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function Header(props) {

    const [ifMobile, setIfMobile] = useState(true);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit();
        navigate('results');
    }

    return (
        <div>
            <header>
                <nav className='navbar'>
                    <div className='navbar__main container'>
                        <Link to="/"><h1>Tasty</h1></Link>

                        {
                            /* make responsive for mobile and desktop */
                            ifMobile ? <div>
                                <span className='search-icon'><SearchIcon /></span>
                            </div> :
                                <form className='search'>
                                    <input className='search__input' type="text" onChange={props.onChange} placeholder="Find a Recipe"></input>

                                    <button className='search__icon' onClick={handleSubmit}><SearchIcon /></button>
                                </form>
                        }
                    </div>
                </nav>

            </header>
            <Outlet />
        </div >
    )
}

export default Header;