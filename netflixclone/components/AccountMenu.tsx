import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
    visible?: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = (props: AccountMenuProps) => {
    if(!props.visible){
        return null;
    }
    return (
        <div className="bg-black w-56 absolute rounded-lg top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-row gap-3">
                <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src="/images/blueDefaultGuy.jpg" alt=""/>
                    <p className="text-white text-sm group-hover/item:underline">
                        Username
                    </p>
                </div>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4"/>
            <div className="px-3 text-center text-white text-sm hover:underline" onClick={() => signOut()} >
                Sign Out
            </div>
        </div>
    )
}
export default AccountMenu;