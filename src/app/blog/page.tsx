"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAllBlogPosts } from "@/data/blogPosts";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

function SafeDate({ dateString }: { dateString: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span>...</span>;
  }

  return (
    <span>
      {new Date(dateString).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </span>
  );
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestro <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Consejos, tutoriales y noticias sobre verificación de cuentas PayPal
            y el mundo de los pagos digitales.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <article className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <ClientOnlyWrapper>
                      <SafeDate dateString={post.date} />
                    </ClientOnlyWrapper>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} de lectura</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 mb-4">{post.excerpt}</p>

                  <div className="flex items-center text-yellow-400 font-semibold">
                    Leer más
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para verificar tu cuenta PayPal?
            </h3>
            <p className="text-gray-300 mb-6">
              Después de leer nuestros consejos, ¡da el siguiente paso!
            </p>
            <Link
              href="/#servicios"
              className="gradient-red-yellow text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Ver Nuestros Planes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
