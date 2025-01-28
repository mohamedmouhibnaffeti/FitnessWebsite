export default function Nav() {
    return (
        <nav className="fixed top-8 left-0 w-full z-50">
            <div className="mx-auto max-w-[1200px] flex flex-wrap items-center justify-between py-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 bg-gray-400 md:rounded-md px-8">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fit.Era</span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-semibold">
                        <li>
                            <a href="#" className="inline-block py-2 px-3 bg-black-700 rounded-sm md:bg-transparent md:text-black-700 md:p-0 text-red-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inline-block from-left py-2 px-3 rounded-sm md:hover:text-red-600 md:p-0 text-white">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inline-block from-left py-2 px-3 rounded-sm md:hover:text-red-600 md:p-0 text-white">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inline-block from-left py-2 px-3 rounded-sm md:hover:text-red-600 md:p-0 text-white">
                                Journey
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
