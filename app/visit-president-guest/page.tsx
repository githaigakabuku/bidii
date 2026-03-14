import Link from "next/link";

export default function VisitPresidentGuest() {
  return (
    <div className="min-h-screen flex items-center justify-center p-12 bg-zinc-50 dark:bg-black">
      <div className="max-w-3xl bg-white dark:bg-black rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4">Visit by the President & Guests</h1>
        <div className="h-56 bg-gradient-to-br from-red-200 via-orange-200 to-yellow-200 rounded-md mb-4 flex items-center justify-center text-zinc-700">Event photos placeholder</div>
        <p className="text-zinc-700 dark:text-zinc-300">A recap and photos from official visits to Bidii Primary.</p>
        <div className="mt-6"><Link href="/" className="text-blue-600">Back to Home</Link></div>
      </div>
    </div>
  );
}
