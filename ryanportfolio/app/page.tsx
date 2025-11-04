"use client";
import { View } from 'lucide-react'
import { Projects } from './components/projects'
import {motion} from 'motion/react'

export default function Page() {
  return (
    <section>
      {/* <View> */}
      <motion.section  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
  >
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Hi, I’m Ryan Koch, and I build modern web and mobile experiences.
      </h1>
      </motion.section>
      <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      >
      <h2 className="mb-8 text-xl font-semibold tracking-tighter">
      Full-stack engineer specializing in React Native, TypeScript, and front-end architecture.
      </h2>
      </motion.section>
      <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      >
      <p className="mb-4">
      I’m a software engineer focused on creating scalable, high-quality applications that feel fast and intuitive. 
      Over the past few years, I’ve built and supported production-ready mobile and web apps for 
      organizations ranging from startups to open-source foundations.

      My core strengths are React Native, TypeScript, and cross-platform design, but I also enjoy tackling the full product lifecycle - 
      from early UX prototypes to production deployments. 
      I care deeply about clean code, collaboration, and thoughtful design systems that make technology feel seamless.
      </p>
      </motion.section>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
      {/* </View> */}
    </section>
  )
}
