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
        A technology product and services company that leverages cutting-edge 
        technology to craft innovative business applications that drive seamless 
        digital interactions across web, mobile, social media, and event-based platforms. 
        By harnessing the power of Artificial Intelligence, machine learning, analytics, 
        and cloud computing, we empower global communications that are intelligent, intuitive, 
        and always connected.
        </p>
      </main>
    </>
  );
};


