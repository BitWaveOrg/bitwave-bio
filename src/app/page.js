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
        <>
            <div className={"wave-bg"}></div>
            <main className="flex min-h-screen flex-col items-center justify-center p-24" >
                <h1 className={`font-bold text-white ${poppinsBold.className}`}>Welcome to BitWave Bio! 🌊</h1>
                <p className={`text-white mb-12 ${jetbrainsMono.className}`}>
                    Simple but powerful profile page-maker.
                </p>
                <form onSubmit={handleSearch} className="w-full max-w-md">
                    <div className="flex items-center border border-slate-200 rounded-xl p-2 shadow-md">
                        <input
                            className={`appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 
                            leading-tight focus:outline-none ${jetbrainsMono.className}`}
                            type="text"
                            placeholder="Enter search term..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            id={"main-search"}
                        />
                        <button
                            className={`flex-shrink-0 bg-blue-400 border-blue-400 hover:bg-blue-800 hover:border-blue-800
                            text-sm border-4 text-white px-2 rounded-full`}
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}
