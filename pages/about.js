/* eslint-disable @next/next/no-img-element */
import { getAbout } from "../actions";
import Title from "../components/title";
import getImageUrl from "../utils";
import Layout from '../components/layout';
import SEO from '../components/seo';



const About = ({about}) => {

  const { title, info, stack, image } = about.data.attributes 
  const imageUrl = getImageUrl(image)

  return (
    <>
    <SEO title="About" />
    <section className="about-page">
      <div className="section-center about-center">
        <img src={imageUrl} alt="about" className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
            </div>
        </article>
      </div>
    </section>
    </>
  )
}

About.getInitialProps = async () => {
  const about = await getAbout()
  return { about }
}

About.Layout = Layout;

export default About;