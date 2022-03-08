import { getProjects } from '../actions';
import Layout from '../components/layout';
import Projects from '../components/project';
import SEO from '../components/seo';

const ProjectsPage = ({projects}) => {
  
  // const { data } = projects

  return (
    <>
    <SEO title="Projects" />
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
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