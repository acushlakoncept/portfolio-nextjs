import Link from 'next/link'
import Title from '../title'
import PublicationCard from './publicationCard'

const Publications = ({ publications, title, showLink}) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        { publications.map(publication => (
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