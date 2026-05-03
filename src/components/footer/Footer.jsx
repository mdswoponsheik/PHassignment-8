import React from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="sm:footer-horizontal bg-green-300 p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
                    <div className="">
                        <h3 className='text-3xl font-bold mb-2'>Contact info</h3>
                        <ul>
                            <li className='text-xl'><span className='font-semibold'>Phone:</span>01620248207</li>
                            <li className='text-xl'><span className='font-semibold'>Email:</span>mdswoponshek1226@gmail.com</li>
                        </ul>
                    </div>
                    <nav className='flex flex-col justify-center '>
                        <h6 className="flex justify-center text-black text-3xl font-bold">Social</h6>
                        <div className="grid grid-flow-col justify-center gap-4">
                            <a href="https://www.facebook.com/swopon.shekh.2025"><FaFacebook className='text-3xl' /></a>
                            <a href="www.youtube.com/@swoponyt8466"><FaYoutube className='text-3xl' /></a>
                            <a href=""><FaInstagramSquare className='text-3xl' /></a>
                        </div>
                    </nav>
                </div>

                <div className="">
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            Terms & Conditions
                        </h2>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            By using our website, you agree to comply with and be bound by our terms and conditions.
                            All course materials are for educational purposes only. Unauthorized copying, sharing, or distribution is strictly prohibited.
                            We reserve the right to update these terms at any time without prior notice.
                        </p>

                        <p className="text-sm text-gray-600 mt-2">
                            If you have any questions, feel free to contact our support team.
                        </p>
                    </div>
                </div>

                <div className="mt-10">

                    <p className='text-black '> Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>

                </div>
            </footer>
        </div>
    )
}

export default Footer
