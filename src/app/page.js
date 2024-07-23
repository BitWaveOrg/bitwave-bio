"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/${search}`);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
            <h1 className="text-6xl font-bold mb-6 text-gray-900">Welcome to Our Project</h1>
            <p className="text-xl text-gray-700 mb-12">
                This is a brief description of the project. It aims to solve problems and provide unique features for our users.
            </p>
            <form onSubmit={handleSearch} className="w-full max-w-md">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Enter search term..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </main>
    );
}
