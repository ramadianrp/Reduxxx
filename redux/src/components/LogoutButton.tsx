"use client"
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function LogoutButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = getCookie('Authorization');
        setIsLoggedIn(accessToken ? true : false);
    }, []);

    const [token, setToken] = useState<string>('');
    const router = useRouter();

    const handleLogout = () => {
        deleteCookie('Authorization');
        setIsLoggedIn(false);

        router.push('/login');
    };

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogout} className="btn btn-ghost">
                  Logout
                </button>
              ) : (
                <Link href="/login" className="btn btn-ghost">Get Started</Link>
              )}
        </div>
    );
}
