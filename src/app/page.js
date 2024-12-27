import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <header className="header">
        <Link href="/page.js" className="title">SpeakPeek</Link>
        <nav className="navbar">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <p>
          Coming Soon..
        </p>
      </main>
    </>
  );
};

export default Page;
