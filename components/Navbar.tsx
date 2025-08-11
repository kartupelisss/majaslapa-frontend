import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="/">Home</Link> {/* ← NEVIS /home */}
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/insights">Insights</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
