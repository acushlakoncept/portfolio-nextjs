import { getPublications } from '../actions';
import Publications from '../components/publication';
import SEO from '../components/seo';
import Layout from '../components/layout';

const PublicationPage = ({publications}) => {
  return (
    <>
    <SEO title="Publications" />
    <section className="blog-page">
      <Publications publications={publications} title="all publications" />
    </section>
    </>
  )
}

PublicationPage.getInitialProps = async () => {
  const publications = await getPublications()
  return { publications }
}

PublicationPage.Layout = Layout;

export default PublicationPage;