import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export const Footer = () => {
    return (
        <footer className="bg-dark-section text-light py-4 px-8 lg:px-24">
            <div className="flex items-center flex-row justify-between">
                <img 
                    src={logo} 
                    alt="Stynx Logo" 
                    className="transition-all duration-300 ease-in-out w-24 sm:w-28 md:w-32 lg:w-36 xl:w-42 hover:scale-105 mb-4 sm:mb-0 sm:mr-4"
                />
                <Link to="/" className="text-light underline text-sm sm:text-base hover:text-gray-300 transition-colors mb-4 sm:mb-0 sm:ml-4">
                    Privacy Policy
                </Link>
            </div>
            <p className="text-center text-sm sm:text-base mt-2 lg:mt-4">© 2025 Stynx. All rights reserved.</p>
        </footer>
    )
}