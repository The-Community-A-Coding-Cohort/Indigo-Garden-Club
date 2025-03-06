import { useState } from "react";
import Input from "../components/Input";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover"> 
            <nav className="px-12 py-5">
                <img src="/images/netflixLogo.png" alt="Logo" className="h-12"/>
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
                    <div className="flex flex-col gap-4">
                        <Input 
                            label="Username"
                            onChange={(e) => setName(e.target.value)}
                            id = "name"
                            value = {name}
                        />
                        <Input 
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            id = "email"
                            type = "email"
                            value = {email}
                        />
                        <Input 
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            id = "password"
                            type = "password"
                            value = {password}
                        />
                    </div>
                    <button className="w-full bg-red-600 py-3 text-white rounded-md mt-10 hover:bg-red-700 transition">
                        Login
                    </button>
                    <p className="text-neutral-500 mt-12">
                        First time using Indi?
                        <span className="text-white ml-1 hover:underline cursor-pointer">
                            Create an account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Auth;