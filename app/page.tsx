import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js</h1>
      <p>Get started by editing this page.</p>
      <Link href="/home" className="text-blue-500 hover:underline">
        Go to Home Page
      </Link>
    </>
  );
}
