let kittens = [
  {
    id: 1,
    name: 'Item1',
    author: 'Author1',
    url: '/item/item1',
    image: 'https://placekitten.com/200/200',
    products: [
      {
        name: 'Product1',
        color: 'brown',
        size: 'size',
        format: 'format',
        template_id: 1,
        tags: ['brown', 'cat'],
      }
    ],
  },
  {
    id: 2,
    name: 'Item2',
    author: 'Author2',
    url: '/item/item2',
    image: 'https://placekitten.com/200/300',
    products: [
      {
        name: 'Product2',
        color: 'grey',
        size: 'size',
        format: 'format',
        template_id: 1,
        tags: ['grey', 'cat'],
      }
    ],
  },
  {
    id: 3,
    name: 'Item3',
    author: 'Author3',
    url: '/item/item3',
    image: 'https://placekitten.com/200/275',
    products: [
      {
        name: 'Product3',
        color: 'grey',
        size: 'size',
        format: 'format',
        template_id: 1,
        tags: ['grey', 'cat'],
      }
    ],
  },
]

let items = []
for (var i = 0; i < 4; i++) {
  items = items.concat(kittens);
}

let data = {
  items: items,
  products: items[0].products
}

export default data;
