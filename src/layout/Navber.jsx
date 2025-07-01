import { useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { Link, NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Navber = () => {
  const { user, SignOut, setUser } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handelLogout = () => {
    SignOut().then(() => {
      // console.log("user SignOut");
      setUser(null);
    });
  };

  return (
    <div className='bg-white/90 backdrop-blur-md shadow-xl py-3 sticky top-0 left-0 z-50 w-full'>
      <div className='w-10/13 mx-auto flex justify-between items-center'>

        {/* Left Site */}
        <Link to={'/'}>
          <div className='flex items-center'>
            <img className='w-10 h-10 object-cover rounded-lg' src={logo} alt="Logo" />
            <h1 className='text-2xl pl-2 font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'>
              LibraryLoop
            </h1>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Middle & Right Site (Desktop) */}
        <div className='hidden md:flex items-center space-x-3'>
          <NavLink to='/' className={({ isActive }) => `text-base font-semibold text-gray-500 ${isActive && "text-blue-600 border-b-2 pb-1"}`}>Home</NavLink>
          {
            user && <>
              <NavLink to='/all-Book' className={({ isActive }) => `text-base font-semibold text-gray-700 ${isActive && "text-blue-600 border-b-2 pb-1"}`}>All Books</NavLink>
              <NavLink to='/add-book' className={({ isActive }) => `text-base font-semibold text-gray-500 ${isActive && "text-blue-600 border-b-3 pb-1"}`}>Add Book</NavLink>
            </>
          }
          <NavLink to={`/Borrowed-Books/${user?.email}`} className={({ isActive }) => `text-base font-semibold text-gray-500 ${isActive && "text-blue-600 border-b-2 pb-1"}`}>Borrowed Books</NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `text-base font-semibold text-gray-500 ${isActive && "text-blue-600 border-b-2 pb-1"}`}>About Us</NavLink>
        </div>

        <div className='hidden md:flex items-center space-x-4'>
          {
            user ? (
              <>
                <div className='rounded-full relative group'>
                  <img className='w-12 h-12 border-2 border-b-cyan-600 rounded-full' src={user?.photoURL} />
                  <div className='bg-black font-semibold text-white py-1 px-3 opacity-0 group-hover:opacity-100 absolute rounded-lg'>
                    {user?.displayName}
                  </div>
                </div>
                <button onClick={handelLogout} className='btn bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg text-base flex items-center gap-1'>
                  <LogOut size={18} />Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to='/login' className={({ isActive }) => `text-base font-semibold ${isActive && "text-blue-600 border-b-2 pb-1"}`}>Login</NavLink>
                <Link to='/register'>
                  <button className='btn bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg text-base'>Register</button>
                </Link>
              </>
            )
          }
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-2'>
          <NavLink to='/' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-base font-semibold text-gray-500 ${isActive && "text-blue-600"}`}>Home</NavLink>
          <NavLink to='/all-Book' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-base font-semibold text-gray-700 ${isActive && "text-blue-600"}`}>All Books</NavLink>
          <NavLink to='/add-book' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-base font-semibold text-gray-500 ${isActive && "text-blue-600"}`}>Add Book</NavLink>
          <NavLink to={`/Borrowed-Books/${user?.email}`} onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-base font-semibold text-gray-500 ${isActive && "text-blue-600"}`}>Borrowed Books</NavLink>

          {user ? (
            <div className='pt-3 space-y-2'>
              <div className='flex items-center gap-2'>
                <img className='w-10 h-10 border-2 border-b-cyan-600 rounded-full' src={user?.photoURL} />
                <span className='text-sm font-medium'>{user?.displayName}</span>
              </div>
              <button onClick={() => { setIsOpen(false); handelLogout(); }} className='w-full btn bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg text-base flex items-center gap-1'>
                <LogOut size={18} />Logout
              </button>
            </div>
          ) : (
            <div className='pt-3 space-y-2'>
              <NavLink to='/login' onClick={() => setIsOpen(false)} className={({ isActive }) => `block text-base font-semibold ${isActive && "text-blue-600"}`}>Login</NavLink>
              <Link to='/register' onClick={() => setIsOpen(false)}>
                <button className='w-full btn bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg text-base'>Register</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navber;
