import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <>
      <nav className='app-header navbar'>
        <div className='title'>OMDB Redux</div>
        <SearchBar />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
