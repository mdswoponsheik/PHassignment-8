"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react'

const Navber = () => {
 
const { data: session, isPending } = authClient.useSession();
const user = session?.user;
console.log(user);
 
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-10 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-green-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/profile">My Profile</Link></li>
            </ul>
          </div>
          <a className="text-green-500 font-bold text-3xl">OnlineBD</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

          {isPending?(<span className="navbar-end mr-10 loading loading-spinner loading-lg"></span>): user ? (
            <div className="navbar-end gap-1">
              <img src={user.image} alt={user.name}
              className='rounded-full w-12 h-12 mx-3'   />
              <button className="btn btn-error text-white text-xl" 
              onClick={async () => await authClient.signOut()}
              >Logout</button>
            </div>
              )
               : (
                <div className="navbar-end">
                  <Link href={`/login`}><button
                   className='bg-green-50 border-green-500 border-1 rounded-lg text-green-500 text-xl font-semibold mx-3  p-2'>LogIn</button></Link>
                  <Link href={`/signup`}><button
                   className='bg-green-50 border-green-500 border-1 rounded-lg text-green-500 text-xl font-semibold p-2'>SingUp</button></Link>
                </div>
              )}
        
      </div>
    </div>
  )
}

export default Navber
