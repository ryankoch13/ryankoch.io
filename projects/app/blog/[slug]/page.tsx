import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getProjects } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getProjects()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getProjects().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }) {
  let p = getProjects().find((p) => p.slug === params.slug)

  if (!p) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Project',
            headline: p.metadata.title,
            datePublished: p.metadata.publishedAt,
            dateModified: p.metadata.publishedAt,
            description: p.metadata.summary,
            image: p.metadata.image
              ? `${baseUrl}${p.metadata.image}`
              : `/og?title=${encodeURIComponent(p.metadata.title)}`,
            url: `${baseUrl}/projects/${p.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {p.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(p.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={p.content} />
      </article>
    </section>
  )
}
