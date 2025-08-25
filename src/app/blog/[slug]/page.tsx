import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/data/blogPosts";
import BlogDetailClient from "@/components/BlogDetailClient";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | BSG Pay",
      description: "El artículo que buscas no existe.",
    };
  }

  return {
    title: `${post.title} | BSG Pay Blog`,
    description: post.excerpt,
    keywords: [
      "verificar cuenta paypal",
      "paypal venezuela",
      "paypal colombia",
      "beneficios paypal verificado",
      "verificacion paypal venezuela",
      "cuenta paypal venezuela",
      "paypal sin limites",
      "verificar paypal rapido",
      ...post.title.split(" ").map((word) => word.toLowerCase()),
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://bsg-pay.vercel.app/blog/${post.id}`,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://bsg-pay.vercel.app/blog/${post.id}`,
    },
    other: {
      "article:author": post.author,
      "article:published_time": post.date,
      "article:section": post.category,
      "geo.region": "VE-CO",
      "geo.placename": "Venezuela, Colombia",
    },
  };
}

// Generar páginas estáticas para todos los posts
export async function generateStaticParams() {
  // Aquí deberías obtener todos los slugs de tus posts
  return [
    { slug: "beneficios-verificar-cuenta-paypal" },
    // Agregar más slugs según tengas más posts
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
