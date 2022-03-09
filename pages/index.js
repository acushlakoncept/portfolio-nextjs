import Head from 'next/head'
import Image from 'next/image'
import { getJobs, getProjects, getPublications } from '../actions'
import Hero from '../components/hero'
import Jobs from '../components/jobs'
import BaseLayout from '../components/layout'
import Projects from '../components/project'
import Publications from '../components/publication'
import SEO from '../components/seo';

export default function Home({jobs, projects, publications}) {
  const featuredProjects = projects.data.filter(project => project.attributes.featured)
  const featuredPublications = publications.data.filter(publication => publication.attributes.featured)
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Jobs jobs={jobs.data} />
      <Projects projects={featuredProjects} title="Featured projects" showLink />
      <Publications publications={featuredPublications} title="Latest publications" showLink />
    </>
  )
}

Home.getInitialProps = async () => {
  const jobs = await getJobs()
  const projects = await getProjects()
  const publications = await getPublications()
  return { jobs, projects, publications }
}

Home.Layout = BaseLayout