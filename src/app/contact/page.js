import Link from 'next/link';
export default function about() {

  return (
    <>
      <header className="header">
        <Link href="/" className="title">SpeakPeek</Link>
        <nav className="navbar">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <p>
          admin@speakpeek.net
        </p>
      </main>
    </>
  );
};


