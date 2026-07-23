import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { posts, getPost, allPostSlugs, postPath, formatDate } from "@/lib/blog";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { ArrowIcon, ClockIcon, CheckIcon } from "@/components/Icons";

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: postPath(post) },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${site.url}${postPath(post)}`,
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/og.png` },
    },
    image: `${site.url}/og.png`,
    mainEntityOfPage: `${site.url}${postPath(post)}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}${postPath(post)}` },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav className="border-b border-steel-100 bg-steel-50">
        <div className="container-max flex flex-wrap items-center gap-2 py-3 text-xs text-steel-500">
          <Link href="/" className="hover:text-brand-600">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600">Blog</Link>
          <span>/</span>
          <span className="font-semibold text-steel-700 line-clamp-1">{post.title}</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-hero-mesh opacity-60" />
        <div className="container-max relative py-14 sm:py-16">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-accent-400/30">
            {post.category}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-brand-100">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><ClockIcon className="h-4 w-4" /> {post.readMinutes} dk okuma</span>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="section">
        <div className="container-max grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-steel-700">{post.intro}</p>

            {post.sections.map((s) => (
              <div key={s.h} className="mt-8">
                <h2 className="text-xl font-extrabold text-steel-900">{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-steel-600">{para}</p>
                ))}
              </div>
            ))}

            {post.conclusion && (
              <div className="mt-10 flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600" />
                <p className="text-sm leading-relaxed text-steel-700">{post.conclusion}</p>
              </div>
            )}
          </article>

          {/* Yan panel */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">Servis mi Lazım?</h3>
              <p className="mt-2 text-sm text-steel-600">Aynı gün endüstriyel bulaşık makinesi servisi için hemen ulaşın.</p>
              <a href={`tel:${site.phoneRaw}`} className="btn-gold mt-4 w-full">{site.phoneDisplay}</a>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">Diğer Yazılar</h3>
              <div className="mt-3 space-y-3">
                {others.map((o) => (
                  <Link key={o.slug} href={postPath(o)} className="group block">
                    <span className="text-sm font-bold text-steel-800 transition group-hover:text-brand-700">{o.title}</span>
                    <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent-600">
                      Oku <ArrowIcon className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
