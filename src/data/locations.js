export const locations = [
  {
    slug: 'local-example',
    environment360: {
      url: '/360-example.jpg',
      previewImage: '/360-thumb-example.jpg',
    },
    pointers: [
      {
        title: 'Objeto tal',
        type: 'target',
        hAngle: 55,
        vAngle: 75,
        route: '/local/local-example/item/object-slug',
      },
      {
        title: 'Local tal',
        type: 'arrow',
        hAngle: 38,
        vAngle: 60,
        route: '/local/local-1',
      },
    ],
    richText: [
      { type: 'title', content: 'Título do Texto' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, neque ut sollicitudin convallis,enim purus dignissim quam, eu dapibus quam risus vitae nisl.',
      },
      {
        type: 'image',
        src: 'https://source.unsplash.com/random',
        alt: 'Imagem do Texto',
        caption:
          'Fusce eget lorem interdum, ultrices ipsum id, congue urna. Nullam ut massa euismod, porttitor nibh sit amet, semper nunc. Lorem ipsum dolor sit amet consectetur elit. Consectetur delectus soluta quidem saepe explicabo esse? Sint distinctio ipsum veniam possimus impedit, porro repudiandae eius sit tempore, ea alias explicabo vel!',
      },
      {
        type: 'quote',
        quote:
          'Suspendisse dignissim justo ac risus interdum facilisis. Sed efficitur arcu velit, non sagittis nisl iaculis eget.',
        cite: 'Autor da Citação',
      },
      {
        type: 'list',
        content: [
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          'Sed quis ipsum convallis, pellentesque purus vitae, commodo turpis.',
          'Donec pretium nibh non sapien eleifend, sit amet aliquam sapien mollis.',
        ],
      },
      { type: 'subtitle', content: 'Conclusão' },
      {
        type: 'paragraph',
        content:
          'Etiam varius nisi vitae ante malesuada eleifend. Phasellus porttitor, lectus a sodales consectetur, felis enim maximus nunc, sit amet fermentum neque augue vel metus.',
      },
    ],
    otherEnvironments: [
      {
        name: 'lugar1',
        link: '/#test',
        slug: 'local-example',
        imageUrl: '/360-thumb-example.jpg',
      },
      {
        name: 'lugar2',
        link: '/#test',
        slug: 'local-example',
        imageUrl: '/360-thumb-example.jpg',
      },
    ],
  },
]
