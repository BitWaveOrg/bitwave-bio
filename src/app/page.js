"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { poppinsBold, jetbrainsMono } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/fontawesome-free-solid'

const { library } = require('@fortawesome/fontawesome-svg-core');
library.add(faSearch);

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
            <h1 className={`font-bold text-gray-900 ${poppinsBold.className}`}>Welcome to BitWave Bio! 🌊</h1>
            <p className={`text-gray-700 mb-12 ${jetbrainsMono.className}`}>
                Simple but powerful profile page-maker.
            </p>
            <form onSubmit={handleSearch} className="w-full max-w-md">
                <div className="flex items-center border border-slate-300 rounded-md p-4  ">
                    <input
                        className={`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 
                        leading-tight focus:outline-none ${jetbrainsMono.className}`}
                        type="text"
                        placeholder="Enter search term..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        id={"main-search"}
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
