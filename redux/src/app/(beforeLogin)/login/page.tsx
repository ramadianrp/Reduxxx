"use client"

import Link from "next/link"

export default function Login() {
    return (
        <>
            <div className="bg-white flex justify-center items-center h-screen ">
                {/* Left: Image */}
                <div className="w-full h-screen hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1532887965424-5620f3b45c3f?q=80&w=3572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Placeholder Image"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-white">
                    <h1 className="text-2xl font-semibold mb-4">Login to your account</h1>
                    <form action="#" method="POST">
                        {/* Username Input */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">
                                Username
                            </label>
                            <input
                                placeholder="your username"
                                type="text"
                                id="username"
                                name="username"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">
                                Password
                            </label>
                            <input
                                placeholder="your password"
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
                        {/* Login Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Login
                        </button>
                    </form>
                    {/* Sign up  Link */}
                    <div className="flex justify-center items-center mt-8">
                        <p>Don't have an account?</p>
                    </div>
                    <div className="mt-1 text-blue-500 text-center">
                        <Link href="/register" className="hover:underline">
                            Sign up here!
                        </Link>
                    </div>
                </div>
            </div>

        </>

    )
}