import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">PatentDesign</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>
    </header>
  );
}
