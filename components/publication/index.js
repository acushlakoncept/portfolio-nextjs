import Link from 'next/link'
import Title from '../title'
import PublicationCard from './publicationCard'

const Publications = ({ publications, title, showLink}) => {

  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        { title === "all publications" &&
          publications.data
          .sort((a, b) => (new Date(b.attributes.date) - new Date(a.attributes.date)))
          .map(publication => (
          <PublicationCard key={publication.id} {...publication.attributes} />
        ))}
        { title === "Latest publications" &&
          publications.map(publication => (
          <PublicationCard key={publication.id} {...publication.attributes} />
        ))}
      </div>
      { showLink &&
        <Link href='/publications'>
          <a className="btn center-btn">publications</a>
        </Link>
      }
    </section>
  )
}

export default Publications