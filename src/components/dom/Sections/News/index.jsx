import useWindowSize from '@/hooks/useWindowSize'
import { useEffect, useMemo, useState } from 'react'
import NewsCard from '../../Cards/News'

export const NewsSection = () => {
  const [newsList, setNewsList] = useState([])
  const { width } = useWindowSize()

  const fullNewsList = useMemo(
    () => [
      {
        title: 'Centro Cultural São Francisco está aberto para visitações',
        subtitle:
          'A beleza do complexo arquitetônico da Igreja de São Francisco, centro histórico de João Pessoa, está à disposição dos visitantes. Mesmo com medidas restritivas, é possível fazer um passeio pelo ponto inicial da capital paraibana, que nasceu ao redor do imponente cruzeiro, cartão de visita para quem chega.',
        link: 'https://arquidiocesepb.org.br/centro-cultural-sao-francisco-esta-aberto-para-visitacoes/',
        imageUrl: '/images/news/001-sao-francisco.jpg',
      },
      {
        title: 'Centro Cultural São Francisco: aula sobre história e arte, em João Pessoa',
        subtitle:
          'O Centro Cultural São Francisco é um exemplo de como a arte e a cultura podem ser preservadas e valorizadas em meio a um mundo em constante mudança. Através de seu patrimônio arquitetônico e artístico, o centro cultural continua a inspirar e encantar visitantes de todo o mundo.',
        link: 'https://jornaldaparaiba.com.br/guia-qualeaboa/centro-cultural-sao-francisco/',
        imageUrl: '/images/news/002-sao-francisco.jpg',
      },
      {
        title: 'Espetáculo da Paixão de Cristo será no Centro Cultural São Francisco',
        subtitle:
          'O diretor executivo da Fundação Cultural de João Pessoa (Funjope), Marcus Alves, e o coordenador do Centro Cultural São Francisco, padre Marcondes Menezes, se reuniram, nesta quinta-feira (2), para alinhar os últimos ajustes da apresentação da peça Paixão de Cristo. O evento será entre os dias 6 e 9 de abril, no adro da Igreja de São Francisco, no Centro da Capital. O edital para seleção de elenco está aberto.',
        link: 'https://wscom.com.br/espetaculo-da-paixao-de-cristo-sera-no-centro-cultural-sao-francisco-e-funjope-abre-selecao-para-elenco/',
        imageUrl: '/images/news/003-espetaculo-sf.jpg',
      },
    ],
    [],
  )

  useEffect(() => {
    const itemsToShow = width < 768 ? 3 : 6
    setNewsList(fullNewsList.slice(0, itemsToShow))
  }, [fullNewsList, width])

  return (
    <section id='noticias' className='pt-20 pb-20 bg-stone-50 app-container'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold xl:text-4xl'>Notícias</h2>
        <div className='w-24 h-1 rounded-full bg-primary-500'></div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {newsList.map(({ title, subtitle, link, imageUrl }) => {
          return <NewsCard key={title} title={title} subtitle={subtitle} link={link} imageUrl={imageUrl} />
        })}
      </div>

      {newsList.length < fullNewsList.length && (
        <div className='grid place-items-center'>
          <button
            className='w-full mt-4 md:w-min btn btn-primary btn-md btn-filled'
            onClick={() => {
              const itemsToShow = Math.min(newsList.length + (width < 768 ? 2 : 4), fullNewsList.length)
              setNewsList(fullNewsList.slice(0, itemsToShow))
            }}>
            Mostrar Mais
          </button>
        </div>
      )}
    </section>
  )
}
