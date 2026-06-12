import React from 'react'
import { FaHistory } from 'react-icons/fa'
import { FaUserLock } from 'react-icons/fa6'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { MdLocalLibrary } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-4  text-2xl">Client Management</div>
    </nav>
    {/* Page content here */}
    <Outlet></Outlet>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            {/* Home icon */}
            <NavLink to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden ml-2">Homepage</span>
            </NavLink>
          </button>
        </li>
        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-5" data-tip="Go Back">
            {/* My Books icon */}
            <NavLink to="/my-dashboard" className="flex items-center">
              <IoArrowBackCircleOutline className='text-lg' />
              <span className="is-drawer-close:hidden ml-2">Go Back</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-5" data-tip="My Books">
            {/* My Books icon */}
            <NavLink to="/my-dashboard/my-books" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <span className="is-drawer-close:hidden ml-2">My Books</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-5" data-tip="Librarian ">
            {/* My Books icon */}
            <NavLink to="/my-dashboard/approve-librarian" className="flex items-center">
              <MdLocalLibrary className='text-lg' />
              <span className="is-drawer-close:hidden ml-2">Librarian</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-5" data-tip="User Management">
            {/* My Books icon */}
            <NavLink to="/my-dashboard/user-management" className="flex items-center">
              <FaUserLock className='text-lg' />
              <span className="is-drawer-close:hidden ml-2">User Management</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-5" data-tip="Payment History">
            {/* My Books icon */}
            <NavLink to="/my-dashboard/payment-history" className="flex items-center">
              <FaHistory className='text-lg' />
              <span className="is-drawer-close:hidden ml-2">Payment History</span>
            </NavLink>
          </button>
        </li>
        {/* List item */}
        <li>
          <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-5" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Dashboard