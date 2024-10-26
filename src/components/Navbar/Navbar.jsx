import { useState } from "react";
import { RiCoinsLine } from "react-icons/ri";
import PropTypes from 'prop-types';

const Navbar = ({ coins = 0 }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex justify-between items-center bg-white border-b border-gray-200 py-4 px-6 w-5/6 mx-auto">

            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-12 h-auto" src="/assets/assets/logo.png" alt="" />
                </div>
            </div>

            <div className="md:hidden">
                <button className="text-gray-700 focus:outline-none" onClick={toggleMenu}>

                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <ul className="flex space-x-8">
                    <li>
                        <a href="" className="text-gray-500 font-semibold hover:text-blue-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-gray-500 font-semibold hover:text-blue-400">
                            Fixtures
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-gray-500 font-semibold hover:text-blue-400">
                            Teams
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-gray-500 font-semibold hover:text-blue-400">
                            Schedules
                        </a>
                    </li>
                </ul>

                <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 whitespace-nowrap">
                    <span className='mr-2'>{coins} Coin</span> <RiCoinsLine className="text-yellow-400 text-2xl" />
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col items-center space-y-4 menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-2 p-1 shadow">
                        <li>
                            <a className="text-gray-700 font-semibold hover:text-blue-500" href="">Home</a>
                        </li>
                        <li>
                            <a className="text-gray-700 font-semibold hover:text-blue-500" href="">Fixture</a>
                        </li>
                        <li>
                            <a className="text-gray-700 font-semibold hover:text-blue-500" href="">Teams</a>
                        </li>
                        <li>
                            <a className="text-gray-700 font-semibold hover:text-blue-500" href="">Schedules</a>
                        </li>
                        <li>
                            <button className="flex items-center bg-gray-100 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 whitespace-nowrap">{coins} Coin <span className="ml-2"><RiCoinsLine className="text-yellow-400 text-2xl" /></span></button>
                        </li>
                    </ul>
                </div>
            )      
            }
        </nav>
    );
    
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired,
};

export default Navbar;