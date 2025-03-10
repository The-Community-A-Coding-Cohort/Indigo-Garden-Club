<<<<<<< HEAD

import React from "react";

=======
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
interface NavbarItemProps {
    label: string
}
const NavbarItem: React.FC<NavbarItemProps> = (props: NavbarItemProps) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
<<<<<<< HEAD
            { props.label }
=======
            {props.label}
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
        </div>
    )
}
export default NavbarItem;