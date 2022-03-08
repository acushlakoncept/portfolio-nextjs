import Link from 'next/link'
import Title from '../title'
import ProjectCard from './projectCard'

const Projects = ({projects, title, showLink}) => {

  return <section className="section projects">
    <Title title={title} />
    <div className="section-center projects-center">
      {projects.map((project, index)=> {
        return <ProjectCard key={project.id} index={index} {...project.attributes} />
      })}
    </div>
    {
      showLink && 
      <Link href='/projects'>
        <a  className="btn center-btn">projects</a>
      </Link>
    }
  </section>
}

export default Projects