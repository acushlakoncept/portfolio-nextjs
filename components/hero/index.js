import Image from "next/image"
import Link from "next/link"
import SocialLinks from "../../constants/socialLinks"
import heroImg from "../../assets/hero-img.png"


const Hero = () => {

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I&apos;m Uduak</h1>
            <h4>full-stack web developer</h4>
            <Link href="/contact">
              <a className="btn">contact me</a>
            </Link>
            <SocialLinks />
          </div>
        </article>
        <div className="hero-img">
        <Image
          alt="hero"
          src={ heroImg } 
          className="hero-img"
          layout="responsive"
          priority />
          </div>
      </div>
  </header>
  )
}

export default Hero;