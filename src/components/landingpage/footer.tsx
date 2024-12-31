import React from 'react';

const Footer = () => {
    return (
        <div className="border-t  border-neutral-100 dark:border-white/[0.1] px-8 pt-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">

                <div>
                    <div className="mr-0 md:mr-4 md:flex mb-4">
                        <a
                            className="font-normal flex space-x-2 items-center  mr-4 text-black px-2 py-1 relative z-20"
                            href="/"
                        >
                            <div className="flex items-center justify-center rounded-full border shadow-md  overflow-hidden ">
                                <img src="/logo.png" className="w-9 h-9 font-semibold" alt="Logo" />
                            </div>
                        </a>
                    </div>
                    <div className="mt-2 ml-2">
                        © copyright Kira AIs 2024. All rights reserved.
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
                    <div className="flex justify-center space-y-4 flex-col w-full">
                        <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                            Pages
                        </p>
                        <ul className="list-none space-y-4">
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">All Products</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Studio</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Clients</a></li>
                        </ul>
                    </div>

                    <div className="flex justify-center space-y-4 flex-col">
                        <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                            Socials
                        </p>
                        <ul className="list-none space-y-4">
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Facebook</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Instagram</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Twitter</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">LinkedIn</a></li>
                        </ul>
                    </div>


                    <div className="flex justify-center space-y-4 flex-col">
                        <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                            Register
                        </p>
                        <ul className="list-none space-y-4">
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Sign Up</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Login</a></li>
                            <li><a className="transition-colors hover:text-text-neutral-800" href="/products">Forgot Password</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Large background title */}
            <p className="text-center mt-10 text-5xl md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
                Kira AI
            </p>
        </div>
    );
};

export default Footer;
