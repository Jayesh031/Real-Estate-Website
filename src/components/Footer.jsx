import React from "react";
import {assets} from "../assets/assets"

export default function Footer() {
    return(
        <>
            <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"  id="Footer">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
                        <img src={assets.logo_dark} alt="" />
                        <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam, aperiam cum molestias voluptatum dolores perspiciatis possimus. Quisquam aliquam voluptatem enim eos sequi quidem in nisi adipisci, veniam molestiae. Optio.
                        </p>
                    </div>

                    <div className="w-full md:w-1/5 mb-8 md:mb-0">
                        <h3 className="text-white text-lg font-bold mb-4 ">Company</h3>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <a href="#Header" className="hover:text-white">Home</a>
                            <a href="#About" className="hover:text-white">About Us</a>
                            <a href="#Contact" className="hover:text-white">Contact Us</a>
                            <a href="#" className="hover:text-white">Privacy Policies</a>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3">
                        <h3 className="text-white text-lg font-bold mb-4 ">Suscribe to Our NewsLetter</h3>
                        <p className="text-gray-400 max-w-80 mb-4">The Latest news,Articles, and Resources, sent to your inbox weekly</p>

                        <div className="flex gap-2">
                            <input type="email" placeholder="Enter Your Email" className="p-2 rounded bg-gray-600 text-gray-400 border border-gray-700 focus:outline-none w-2/4 md:w-auto" />

                            <button className="py-2 px-4 rounded bg-blue-500 text-white ">Subscribe</button>
                        </div>
                    </div>
                </div>
            {/* ------------------------------------------------------------ */}
                <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 w-full">
                    Copyright 2024 @Jayesh_R_A. All Rights Reserved.
                </div>
            </div>
        </>
    )
}