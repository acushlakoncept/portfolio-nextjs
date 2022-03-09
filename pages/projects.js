import { getProjects } from '../actions';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/project/projectCard';
import Title from '../components/title';


const ProjectsPage = ({projects}) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const pageLimit = 10

  useEffect(() => {
    const count = Math.ceil(projects.data.length/pageLimit);
    setPageCount(count)
  }, [])

  const projectsPerPage = projects.data
  .sort((a, b) => (new Date(b.attributes.date) - new Date(a.attributes.date)))
  .slice (
    (currentPage - 1) * pageLimit,
    (currentPage - 1) * pageLimit + pageLimit)
  .map((project, index) =>  (
      <ProjectCard key={project.id} index={index} {...project.attributes} />
    ))

  return (
    <>
    <SEO title="Projects" />
    <section className="projects-page">
      <section className="section projects">
        <Title title={`all projects (${projects.data.length})`} />
        <div className="section-center projects-center">
        <div style={{display: "flex", justifyContent: "end"}}>
            { Array.from({length: pageCount}, (_, i) => i + 1).map((_, i) => (
                <button 
                  style={{padding: "2px 10px", margin: "0 3px", textAlign: "center"}}
                  className={currentPage === i + 1 ? "btn" : ""} 
                  key={i + 1} 
                  onClick={() => setCurrentPage(parseInt(i+1))}>
                    {i+1}
                </button>
              ))

              }
          </div>
        {projectsPerPage}

          <div style={{display: "flex", justifyContent: "center"}}>
            { Array.from({length: pageCount}, (_, i) => i + 1).map((_, i) => (
                <button 
                  style={{padding: "2px 10px", margin: "0 3px", textAlign: "center"}}
                  className={currentPage === i + 1 ? "btn" : ""} 
                  key={i + 1} 
                  onClick={() => setCurrentPage(parseInt(i+1))}>
                    {i+1}
                </button>
              ))

              }
          </div>
        </div>
      </section>
    </section>
    </>
  );
}

ProjectsPage.getInitialProps = async () => {
  const projects = await getProjects()
  return { projects }
}

ProjectsPage.Layout = Layout;

export default ProjectsPage;