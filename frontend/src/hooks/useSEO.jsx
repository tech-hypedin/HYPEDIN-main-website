import { Helmet } from 'react-helmet-async'

export function useSEO(config) {
  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage = 'https://www.hypedin.co/assets/og-image.jpg',
    ogImageWidth = '1200',
    ogImageHeight = '630',
    keywords,
    type = 'website',
    robots = 'index, follow',
    author = 'HYPEDIN',
    twitterHandle = '@hypedin',
    locale = 'en_IN'
  } = config

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="HYPEDIN" />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={canonical} />
      
      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
  )
}
