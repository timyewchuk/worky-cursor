import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-center flex flex-col text-center">
        {/* Placeholder for the pixelated Worky mascot */}
        <div className="w-32 h-32 bg-primary mb-6 rounded-lg relative">
          {/* This is a placeholder, in a real app we'd use an actual image */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {/* Pixel art eyes */}
            <div className="col-start-3 col-span-1 row-start-3 row-span-1 bg-white"></div>
            <div className="col-start-6 col-span-1 row-start-3 row-span-1 bg-white"></div>
            {/* Pixel art smile */}
            <div className="col-start-3 col-span-4 row-start-5 row-span-1 bg-white rounded-full"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Worky</h1>
        <p className="text-lg mb-8">Your team productivity tool</p>
        
        <Link
          href="/auth"
          className="px-6 py-3 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
} 