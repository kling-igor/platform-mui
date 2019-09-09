export default {
  id: 'swiper',
  type: 'swiper',
  visibility: true,
  styles: [
    {
      self: [
        {
          width: '100%',
          height: '100%'
        }
      ],
      pagination: [
        {
          bottom: 10
        }
      ],
      dot: [
        {
          backgroundColor: 'blue',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 7,
          marginRight: 7
        }
      ],
      dotActive: [
        {
          backgroundColor: 'red',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 7,
          marginRight: 7
        }
      ]
    }
  ],
  index: 0,
  showsButtons: true,
  showsPagination: true,
  loop: false,
  autoplay: false,
  autoplayTimeout: 2.5,
  itemTemplate: {
    type: 'image',
    id: 'template',
    fit: 'fill',
    styles: [
      {
        self: [
          {
            width: '100%',
            height: 200
          }
        ]
      }
    ]
  },
  data: [
    {
      id: 0,
      value: 'https://picsum.photos/id/939/300/200'
    },
    {
      id: 1,
      value: 'https://picsum.photos/id/938/300/200'
    }
  ]
}
