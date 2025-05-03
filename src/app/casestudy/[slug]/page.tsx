"use client";
import Image from "next/image";
import { format } from "date-fns";
import caseStudies from "@/data/casestudy.json";

import { use } from "react";
import { notFound } from "next/navigation";

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = caseStudies.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gray-50 text-gray-800 pb-20 mb-20">
      {/* Hero */}
      <header className="relative h-[45vh] w-full overflow-hidden">
        {post.heroImage ? (
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        ) : null}
      </header>

      {/* Title block */}
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mt-10 text-4xl font-extrabold leading-tight">
          {post.title}
        </h1>
        <h2 className="mt-4 text-xl text-gray-600">{post.subtitle}</h2>

        <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={new Date(post.date).toISOString()}>
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </div>

      {/* Body */}
      <div className="prose prose-purple mx-auto max-w-3xl px-6 prose-img:rounded-lg">
        {post.sections.map((sec) => (
          <section key={sec.heading} className="pt-10">
            <h3>{sec.heading}</h3>
            <p>{sec.content}</p>

            {sec.image ? (
              <Image
                src={sec.image}
                alt={sec.heading}
                width={1200}
                height={800}
                className="my-6"
              />
            ) : null}

            {sec.quote && (
              <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600">
                {sec.quote}
              </blockquote>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}