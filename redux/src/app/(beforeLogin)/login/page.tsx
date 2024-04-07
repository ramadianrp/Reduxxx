import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Login() {
    async function loginAction(formData: FormData) {
        "use server"
        try {
            cookies().delete("Authorization");
            const rawFormData = {
                email: formData.get("email"),
                password: formData.get("password"),
            };

            const response = await fetch("http://localhost:3000/api/users/login", {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rawFormData),
            });

            if (response.status != 200) {
                throw new Error("Failed to Login" + response.status);
            }
            const responseJson = await response.json();
            cookies().set("Authorization", `Bearer ${responseJson.data.accessToken}`);
        } catch (error) {
            console.error("Login Error", error);
            redirect("/login");
        }
        return redirect("/");
    }

    return (
        <>
            <div className="bg-white flex justify-center items-center h-screen">
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
                    <form action={loginAction}>
                        {/* Username Input */}
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
                        {/* Login Button */}
                        <button
                            type="submit"
                            
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Login
                        </button>
                    </form>
                    {/* Sign up Link */}
                    <div className="flex justify-center items-center mt-8">
                        <p>Don't have an account?</p>
                    </div>
                    <div className="mt-1 text-blue-500 text-center">
                        <Link href="/register" className="hover:underline">
                            Sign up here!
                        </Link>
                    </div>
                    <div className="flex justify-center items-center mt-8">
                        <p>Or change your mind?</p>
                    </div>
                    <div className="mt-1 text-blue-500 text-center">
                        <Link href="/" className="hover:underline">
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
