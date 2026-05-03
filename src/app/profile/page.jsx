import Link from 'next/link'
import React from 'react'

const MyProfilepage = () => {
  return (
    <div>
      <h2 className='text-center mt-5 mb-2 text-3xl font-bold'>My Profile</h2>
      <div className="w-96 mx-auto gap-5 rounded-2xl bg-green-50 p-5">
      <div className="  flex items-center ">
        <div className="">
          {/* <img className='rounded-full w-30'
          src="" alt="" /> */}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">User Name</h2>
          <p className="text-sm text-gray-500"> <span className="font-bold">Email:</span></p>
        </div>
        
      </div>
      <div className="flex gap-3 m-5 justify-between border">
        <Link href="/profile/edit" className="ml-auto">
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white">Edit Profile</button>
        </Link> 
        <Link href="/login">
          <button className="rounded-lg bg-red-500 px-4 py-2 text-white">Logout</button>
        </Link>
      </div>
        </div>
    </div>
  )
}

export default MyProfilepage
