import { Outlet, Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function Header(props) {

    const [isIconClicked, setIsIconClicked] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit();
        navigate('results');
    }

    function handleClick() {
        setIsIconClicked(!isIconClicked);
    }

    return (
        <div>
            <header>
                <nav className='navbar-container'>
                    <div className='navbar__main container'>
                        <Link to="/"><h1>Tasty</h1></Link>

                        <span className='search-icon' onClick={handleClick}>
                            {!isIconClicked ? <SearchIcon /> : 'X'}
                        </span>

                        <form className={isIconClicked ? 'search-form' : 'display-none'}>
                            <input className='search__input' type="text" onChange={props.onChange} placeholder="Find a Recipe"></input>

                            <button className='search__icon' onClick={handleSubmit}><SearchIcon /></button>
                        </form>

                    </div>
                </nav>

            </header>
            <Outlet />
        </div >
    )
}

export default Header;