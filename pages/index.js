import Head from 'next/head'
import Image from 'next/image'
import { getJobs } from '../actions'
import Hero from '../components/hero'
import Jobs from '../components/jobs'
import Layout from '../components/layout'

export default function Home({jobs}) {
  return (
    <>
      <Hero />
      <Jobs jobs={jobs.data} />
    </>
  )
}

Home.getInitialProps = async () => {
  const jobs = await getJobs()
  return { jobs }
}

Home.Layout = Layout