import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

export function Projects() {
  let allProjects = getProjects()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((p) => (
          <Link
            key={p.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${p.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(p.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {p.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
