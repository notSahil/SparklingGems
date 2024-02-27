export const navigation = {
  categories: [
    {
      id: 'Women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'images/config1.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Daily to Wear',
          href: '/',
          imageSrc: 'images/ear1.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'jewellery',
          name: 'Jewellery',
          items: [
            { name: 'Anklet', id: 'Anklet', href: '/women/jewellery/earrings' },
            { name: 'Bangle', id:"Bangle", href: '#' },
            { name: 'Earrings', id: 'Earrings' },
            { name: 'Head Jewellery', id: 'Head Jewellery' },
            { name: 'Necklace', id: 'Necklace' },
            { name: 'Ring', id: 'Ring' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch' },
            { name: 'Wallets', id: 'wallet' },
            { name: 'Bags', id: 'bag' },
            { name: 'Sunglasses', id: 'sunglasse' },
            { name: 'Hats', id: 'hat' },
            { name: 'Belts', id: 'belt' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Significant Other', id: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'images/config3.jpg',
          imageAlt: 'Locket',
        },
        {
          name: 'Daily to Wear Accessories',
          id: '#',
          imageSrc: 'images/config4.jpg',
          imageAlt: 'Locket',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Jewellery',
          items: [
            { name: 'Locket', id: 'earring' },
            { name: 'Chain', id: 'shirt' },
            { name: 'Ring', id: 'men_jeans' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: '#' },
            { name: 'Wallets', id: '#' },
            { name: 'Sunglasses', id: '#' },
            { name: 'Hats', id: '#' },
            { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
          ],
        },
      ],
    },
  ],
  pages: [],
}
