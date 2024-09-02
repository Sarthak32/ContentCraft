import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";

import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 py-6 lg:px-8 lg:py-8 bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex gap-8">
            <Auth />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl mb-6 leading-tight">
              Transform Your Content Creation with AI
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Discover our AI-powered tools designed to simplify and elevate your content strategy. Create impactful social media posts, blogs, and more effortlessly.
            </p>
            <Link href="/get-started">
              <div className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
                Get Started
              </div>
            </Link>
          </div>
        </section>

        <section className="w-full py-20 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 mx-auto bg-blue-700 text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V7h2v3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Boost Productivity</h3>
                <p className="text-gray-700">
                  Automate repetitive tasks and enhance your workflow with our intelligent automation features.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 mx-auto bg-green-700 text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v-2h-2v2zm0-4h2V7h-2v8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Drive Engagement</h3>
                <p className="text-gray-700">
                  Create engaging and interactive content that connects with your audience and drives results.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 mx-auto bg-purple-700 text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h2v-2h-2v2zm0-4h2V7h-2v8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Driven Insights</h3>
                <p className="text-gray-700">
                  Gain valuable insights from AI to refine your content strategy and improve your results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
