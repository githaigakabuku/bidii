import Link from "next/link";

export default function FavouredGodlySchool() {
  return (
    <div className="min-h-screen flex items-center justify-center p-12 bg-zinc-50 dark:bg-black">
      <div className="max-w-3xl bg-white dark:bg-black rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Favoured & Godly School</h1>
        <div className="h-56 bg-gradient-to-br from-rose-200 via-pink-200 to-fuchsia-200 rounded-md mb-4 flex items-center justify-center text-zinc-700">Values placeholder</div>
        <p className="text-zinc-700 dark:text-zinc-300">Our values, vision and spiritual life at Bidii.</p>
        <div className="mt-6"><Link href="/" className="text-blue-600">Back to Home</Link></div>
      </div>
    </div>
  );
}
