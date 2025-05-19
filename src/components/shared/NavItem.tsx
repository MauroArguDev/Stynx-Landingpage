import { Link } from "react-router-dom"

interface NavItemProps {
    href: string
    text: string
}

export const NavItem = ( {href, text}: NavItemProps) => {
    return (
        <li className="p-3 px-6 rounded-md transition-all cursor-pointer hover:scale-110">
            <Link to={href} className="duration-300 font-inter ease-linear text-light py-3 text-lg md:text-4xl lg:text-base">
                {text}
            </Link>
        </li>
    )
}