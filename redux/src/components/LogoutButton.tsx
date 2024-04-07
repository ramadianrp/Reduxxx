"use client"
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LogoutButton() {
    const [token, setToken] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const accessToken = getCookie('Authorization') || '';
        setToken(accessToken);
    }, []);

    const handleLogout = () => {
        deleteCookie('Authorization');
        router.push('/login');
    };

    return (
        <div>
            {token ? (
                <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                </button>
            ) :
                <Link href={'/login'} className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Login</Link>
            }
        </div>
    );
}
