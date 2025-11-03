import { Projects } from '../components/projects'

export const metadata = {
  title: 'Projects',
  description: 'View my projects.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Projects</h1>
      <Projects />
    </section>
  )
}
