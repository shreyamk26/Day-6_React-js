"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Jarvis</h1>
      <p className="text-lg text-gray-600 mt-2">Your personal AI assistant for Japanese learning and art generation</p>
      <button 
        className="bg-red-600 p-4 rounded-full text-white mt-8"
        onClick={(e) => router.push("/chat")}
      >
        Get Started
      </button>
    </div>
  );
}
