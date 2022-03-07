import Link from "next/link"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "publications",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link href={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default function PageLinks ({ styleClass }) {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
