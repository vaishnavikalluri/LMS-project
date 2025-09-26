"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold tracking-wide">LMS</h1>
            <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                <li><Link href="/login" className="hover:text-blue-400">Login</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
            </ul>
        </nav>
    );
}
