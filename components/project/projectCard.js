/* eslint-disable @next/next/no-img-element */

import { AiOutlineGlobal, AiOutlineGithub } from "react-icons/ai"
import getImageUrl from "../../utils"

const ProjectCard = ({ description, title, github, stack, url, image, index }) => {

  const imageUrl = getImageUrl(image)

  return (
    <article className="project">

    <div className="project-img gatsby-image-wrapper" style={{position:"relative", overflow:"hidden"}}>
      <div aria-hidden="true" style={{width:"100%", paddingBottom: "59%"}} />
      <img aria-hidden="true" 
        src={imageUrl}
        alt={title} 
        style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", opacity: "1", transitionDelay: "500ms"}} />
          
    </div>

      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} title="Github" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub className="project-icon" />
          </a>
          <a href={url} title="Live Link" target="_blank" rel="noopener noreferrer">
            <AiOutlineGlobal className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard