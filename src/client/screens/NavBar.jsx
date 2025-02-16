import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='bg-black p-4 text-white flex flex-row gap-2'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
}