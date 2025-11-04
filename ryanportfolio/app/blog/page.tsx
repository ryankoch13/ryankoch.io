import { Projects } from 'app/components/projects'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portfolio</h1>
      <Projects />
    </section>
  )
}
