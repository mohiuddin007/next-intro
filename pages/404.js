import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';


export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
           //router.go(-1)
           //router.go(-1)
            router.push('/');
        }, 3000)
    },[])
    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page is not found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}
