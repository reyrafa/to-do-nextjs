"use client"

import { useState } from "react";
import RequiredInput from "../ui/error-messages/required-input";
import { Auth } from "@/lib/auth";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggleError, setToggleError] = useState('hidden');
    const [error, setError] = useState();
    function togglePassword() {
        setShowPassword(!showPassword);
    }
    async function login(e: React.FormEvent) {
        e.preventDefault();
        const response = await Auth({email, password});
        const data = await response.json();
        if(response.status === 422){
            console.log(data.errors);
        }
        if(response.status === 401){
            
        }
    }
    return (
        <div className="mx-4 md:mx-0 mt-4 md:my-auto">
            <div className="w-full md:w-1/2 mx-auto bg-white rounded-3xl shadow-xl flex justify-between">
                <div className="flex-1 p-10">
                    <div className="text-center tracking-wider uppercase font-bold">Login</div>
                    <div className="mt-3">
                        <form onSubmit={login}>
                            <div className="mb-4">
                                <label htmlFor="" className="text-sm mb-1">Email</label>
                                <input type="email" placeholder="Enter Email" className="rounded bg-gray-100 text-gray-700 w-full p-2 border text-sm focus:outline-blue-400" onChange={(e) => setEmail(e.target.value)} required />

                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="text-sm mb-1">Password</label>
                                <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="rounded bg-gray-100 text-gray-700 w-full p-2 border text-sm focus:outline-blue-400" onChange={(e) => setPassword(e.target.value)} required />
                                <label className="flex items-center mt-2 ms-1"><input type="checkbox" onChange={togglePassword} /><span className="text-xs ms-1 text-gray-600">Show Password</span></label>

                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-green-700 rounded px-5 py-2 text-sm text-white text-center tracking-wider cursor-pointer">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-green-500 flex-1 hidden md:block rounded">
                    <div className="">
                        <div className="text-center mt-6 text-2xl font-bold tracking-wider text-white">
                            Hello There!
                        </div>
                        <div className="text-center text-sm tracking-wider text-white">
                            Welcome Back To My To Do List Application
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}