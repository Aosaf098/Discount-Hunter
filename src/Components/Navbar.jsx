import logo from '../../public/logo.png'


const Navbar = () => {
  return (
    <>
        <nav className='flex items-center justify-around py-4 bg-[#f3f3f3]'>
            <div>
                <img className='w-16' src={logo} alt="" />
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    <li>Home</li>
                    <li>Brands</li>
                    <li>About Dev</li>
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                <button className='bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500'>Sign In</button>
                <button className='bg-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500'>Registration</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar
