/* eslint-disable @next/next/no-img-element */

import getImageUrl from "../../utils"


const PublicationCard = ({id, title, image, date, category, desc, url}) => {

  const imageUrl = getImageUrl(image)

  return (
    <a href={url} className="blog" target="_blank" rel="noopener noreferrer" key={id}> 
      <article>
        <img src={imageUrl}
        alt={title}
        style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center"}} 
        className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

export default PublicationCard