import Head from "next/head"
import siteMetadata from "./meta"


const SEO = ({title, description}) => {

  const {
    author,
    siteDesc,
    image,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = siteMetadata

  return (
    <Head>
      <title>{`${title} || ${title}`}</title>
      <meta name="description" content={`${description} || ${siteDesc}`} />
      <meta name="image" content={siteMetadata.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:title" content={siteTitle} />
      <meta name="og:description" content={siteDesc} />
      <meta name="og:image" content={image} />
    </Head>
  )
}

export default SEO