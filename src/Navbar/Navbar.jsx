

const Navbar = () => {

    const links =<>
    <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white text-2xl">Home</button>
    <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white text-2xl">Doctors</button>
    <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white text-2xl">Contact</button>
    <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white text-2xl">About Us</button>
    <button className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white text-2xl">Important notice</button>
    </>

    return (
        <div>
            <div className="navbar bg-white text-green-600">
  <div className="navbar-start ">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">IHS Hospital</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
      {links}
    </ul>
  </div>
  
</div>
            
        </div>
    );
};

export default Navbar;