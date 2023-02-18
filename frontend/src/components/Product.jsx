/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Adidas X Gucci',
      href: '#',
      price: '$3000',
      imageSrc: 'https://media.gucci.com/style/HEXE0E8E5_Center_0_0_800x800/1666976449/717705_XKCQ3_5429_001_100_0000_Light-adidas-x-Gucci-wool-cardigan.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Chaqueta Burberry',
      href: '#',
      price: '$3500',
      imageSrc: 'https://assets.burberry.com/is/image/Burberryltd/8DE90586-DEA9-43D6-9BF2-DB5042830364?$BBY_V2_SL_1x1$&wid=887&hei=887',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Balenciaga X Adidas pants',
      href: '#',
      price: '$890',
      imageSrc: 'https://balenciaga.dam.kering.com/m/756a5817c3876d6f/Small-725985TNO246498_F.jpg?v=2',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Bolsa Louis Vuitton',
      href: '#',
      price: '$3500',
      imageSrc: 'https://la.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-bolsa-onthego-pm-lv-x-yk-monogram-bolsas-de-mano--M46380_PM2_Front%20view.png?wid=656&hei=656',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <button className="bg-green rounded-xl w-28 h-10 text-white font-bold">LO QUIERO!</button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  