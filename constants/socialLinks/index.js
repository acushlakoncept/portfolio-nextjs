import {
  FaLinkedin,
  FaGithubSquare,
  FaFile,
  FaAngellist,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/acushlakoncept",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/acushlakoncept",
  },
  {
    id: 3,
    icon: <FaAngellist className="social-icon"></FaAngellist>,
    url: "https://angel.co/u/acushlakoncept",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/acushlakoncept",
  },
  {
    id: 5,
    icon: <FaFile className="social-icon"></FaFile>,
    url: "https://drive.google.com/file/d/1kfunvQDEGA_R3011I9dwDSaTH43D8GRb/view",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
        {link.icon}
      </a>
    </li>
  )
})

export default function SocialLinks ({ styleClass }) {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
