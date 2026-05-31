import React, { useEffect, useState } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { PiBookOpenTextFill } from 'react-icons/pi'
import { NavLink } from 'react-router'
import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'
import { MdOutlineLogin } from 'react-icons/md'
import { IoMdBicycle } from 'react-icons/io'

const Navbar = () => {
    
    const {user, logOut} = useAuth()

  const [showItems, setShowItems] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)


  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success('Logout successful')
      })
      .catch((error) => {
        // An error happened.
        toast.error('Error signing out: ' + error.message);
       })
  }

  useEffect(() => {
    const handleScroll = () => {

      // always show at top
      if (window.scrollY < lastScrollY) {
        setShowItems(true)
      } 
      // scroll DOWN → hide
      else if (window.scrollY > lastScrollY) {
        setShowItems(false)
      } 
      // scroll UP → show
      else {
        setShowItems(true)
      }

      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // final visibility logic
  const visible = showItems || isHovering

  const links =
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-books">Books</NavLink></li>
      <li><NavLink to="/my-dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/send-book">Send Book</NavLink></li>
    </>

  return (
    <div>
      <div
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
  className={`
    fixed left-1/2 -translate-x-1/2
    z-[5000]
    rounded-full
    px-2 md:px-6
    transition-all duration-700 ease-in-out

    ${
      visible
        ? `
          top-2
          w-[95%]
          max-w-7xl
          scale-100
          bg-white/40
          backdrop-blur-xl
          shadow-lg
        `
        : `
          top-4
          w-[95%]
          max-w-7xl
          scale-95
          bg-white/20
          backdrop-blur-lg
          shadow-sm
        `
    }
  `}
>

        <div className="navbar">

          {/* LEFT */}
          <div className="navbar-start">

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                ☰
              </div>
              <ul className="navbar-small-device menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>

            {/* LOGO */}
            <NavLink to="/" className={` cursor-pointer font-bold text-white lobster-two-bold transition-all duration-500
              ${visible 
                ? 'text-3xl opacity-100 scale-100 ' 
                : 'opacity-0 scale-75 pointer-events-none'}
            `}>
              <div className="flex items-center gap-2">
                <PiBookOpenTextFill className='text-3xl md:text-4xl text-[#8B5CF6]' />
                <span
                  className={`text-lg md:text-2xl transition-all duration-500
                    ${visible ? 'text-[#8B5CF6]' : 'text-white'}
                    `}>
                  BookCourier</span>
              </div>
            </NavLink>

          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl gap-2 cormorant-infant navbar-container">
              {links}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-1">

            <NavLink to="/login" className={`hover:bg-white/50 cursor-pointer flex items-center gap-2 rounded-full transition-all duration-300 hover:scale-90
              ${visible 
                ? 'px-2 md:px-2 py-1 text-lg md:text-xl opacity-100 scale-100 ' 
                : 'opacity-0 scale-75 pointer-events-none px-0 py-0'}
            `}>
              {user? 
              (
                <button onClick={handleLogOut} className="flex items-center gap-2  rounded-full transition-all duration-300 hover:scale-90 px-1 md:px-2 py-1 text-lg md:text-xl">
                  <BiLogOut />
                  <span className="hidden md:inline">{visible && 'Logout'}</span>
                </button>
              )
                :
              (
              <>
               <MdOutlineLogin />
               <span className="hidden md:inline">{visible && 'Login'}</span>
              </>
              )
              }
            </NavLink>


              {/* CTA Button */}
            <NavLink to='/order-book'>
            <button
              className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-full
                text-white
                font-medium
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-600
                hover:scale-105
                transition-all
                duration-300
              "
            >
              {visible && <IoMdBicycle className='text-xl' />}

              <span className="hidden md:block">
                {visible && 'Be a Librarian'}
              </span>
            </button>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Navbar