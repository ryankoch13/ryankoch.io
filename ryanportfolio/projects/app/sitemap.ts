import { getProjects } from 'app/projects/utils'

// export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let projects = getProjects().map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: p.metadata.publishedAt,
  }))

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projects]
}
