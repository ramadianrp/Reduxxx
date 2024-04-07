import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Register() {
    async function registerAction(formData: FormData) {
        "use server";

        const rawFormData = {
            name: formData.get("name"),
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        };
        console.log(rawFormData);
        

        const response = await fetch(`http://localhost:3000/api/users/register`, {
            method: "post",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
        });
        redirect("/login");
    }

    return (
        <>
            <div className="bg-white flex justify-center items-center h-screen ">
                {/* Left: Image */}
                <div className="w-full h-screen hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1555992938-ae7aa7e36d07?q=80&w=3046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Placeholder Image"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-white">
                    <h1 className="text-2xl font-semibold mb-4">Register your account</h1>
                    <form action={registerAction}>
                        {/* Username Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600">
                                Name
                            </label>
                            <input
                                placeholder="your name"
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                autoComplete="off"
                            />
                        </div>
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
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                Email
                            </label>
                            <input
                                placeholder="your email"
                                type="text"
                                id="email"
                                name="email"
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
                        {/* Register Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Register
                        </button>
                    </form>
                    <div className="flex justify-center items-center mt-8">
                        <p>Already have an account?</p>
                    </div>
                    <div className="flex mt-1 justify-center items-center">
                        <Link href="/login" style={{ color: '#0070f3' }}>
                            Login here!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
