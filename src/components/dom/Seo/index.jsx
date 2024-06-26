import Head from 'next/head'

const titleDefault = 'São Francisco'
const url = 'https://jp-360.vercel.app/'
const description =
  'Explore o Centro Cultural São Francisco em 360º e veja objetos históricos em 3D com detalhes técnicos. Uma experiência imersiva e enriquecedora.'
const author = 'Gildson Alves'

export default function Seo({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='pt-BR' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />
      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='imersão 360, ambiente 3D, Centro Cultural São Francisco, tour virtual, objetos históricos, realidade virtual, experiência interativa, visualização tridimensional, cultura brasileira, tecnologia WebGL'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name='og:title' content={title} />
      <meta name='og:type' content='site' />
      <meta name='og:url' content={url} />
      <meta name='og:image' content={'/icons/share.png'} />
      <meta name='og:site_name' content={title} />
      <meta name='og:description' content={description} />
      <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='16x16' href='/icons/favicon-16x16.png' />
      <link rel='apple-touch-icon' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' color='#18181b' href='/icons/safari-pinned-tab.svg' />
      <link rel='apple-touch-startup-image' href='/startup.png' /> {/* no startup */}
      {/* Meta Tags for HTML pages on Mobile */}
      <meta name='format-detection' content='telephone=yes' />
      <meta name='HandheldFriendly' content='true' />
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#18181b' />
      <link rel='shortcut icon' href='/icons/favicon.ico' />
      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@onirenaud' />
    </Head>
  )
}
