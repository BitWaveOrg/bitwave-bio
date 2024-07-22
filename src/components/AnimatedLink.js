"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import PageTransition from './PageTransition';

const AnimatedLink = ({ href, children, ...props }) => {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsAnimating(true);
        setTimeout(() => {
            router.push(href);
        }, 1000);
    };

    return (
        <>
            <Link href={href} onClick={handleClick} {...props}>
                {children}
            </Link>
            <PageTransition isAnimating={isAnimating} gifSrc={'/assets/img/loading.gif'} />
        </>
    );
};

export default AnimatedLink;