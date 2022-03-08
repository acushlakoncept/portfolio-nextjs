import Head from 'next/head'
import Image from 'next/image'
import { getJobs, getProjects } from '../actions'
import Hero from '../components/hero'
import Jobs from '../components/jobs'
import Layout from '../components/layout'
import Projects from '../components/project'

export default function Home({jobs, projects}) {
  const featuredProjects = projects.data.filter(project => project.attributes.featured)
  return (
    <>
      <Hero />
      <Jobs jobs={jobs.data} />
      <Projects projects={featuredProjects} title="Featured projects" showLink />
    </>
  )
}

Home.getInitialProps = async () => {
  const jobs = await getJobs()
  const projects = await getProjects()
  return { jobs, projects }
}

Home.Layout = Layout