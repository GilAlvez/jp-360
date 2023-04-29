import { Text } from '@/components/dom/Text'

export const useRenderRichText = (richText) => {
  const richTextRenderFunctions = {
    title: (item, i) => <Text.Title key={i}>{item.content}</Text.Title>,
    subtitle: (item, i) => <Text.Subtitle key={i}>{item.content}</Text.Subtitle>,
    paragraph: (item, i) => <Text.Paragraph key={i}>{item.content}</Text.Paragraph>,
    image: (item, i) => (
      <Text.FigureContainer key={i}>
        <Text.FigureImage src={item.src} alt={item.alt} fill />
        <Text.FigureCaption>{item.caption}</Text.FigureCaption>
      </Text.FigureContainer>
    ),
    quote: (item, i) => (
      <Text.Blockquote key={i}>
        <Text.Quote>{item.quote}</Text.Quote>
        <Text.Cite>{item.cite}</Text.Cite>
      </Text.Blockquote>
    ),
    list: (item, i) => (
      <Text.ListContainer key={i}>
        {item.content.map((listItem, itemI) => (
          <Text.ListItem key={itemI}>{listItem}</Text.ListItem>
        ))}
      </Text.ListContainer>
    ),
  }

  const richTextComponents = (
    <Text.Container>{richText?.map((item, i) => richTextRenderFunctions[item.type]?.(item, i) || null)}</Text.Container>
  )

  return richTextComponents
}
