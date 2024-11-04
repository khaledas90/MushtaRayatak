import React from 'react';
import Title from '../title/tittle'
import data_product from '../../assets/data.js'
import Items from '../items/items'


export default function Popular() {
  return (
    <section className="popular py-10">
    <Title
      mainTitle="Popular In Women"
      showHr={true}
      sizeHr="w-1/2 mx-auto"
      StyleHr="w-1/2 mx-auto"
    />
    <div className="container mx-auto px-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data_product.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            NewPrice={item.new_price}
            OldPrice={item.old_price}
            
            offer={(item.id === 2 || item.id === 4) ? '20% OFF' : undefined}
              isOffer={(item.id === 2 || item.id === 4)}
          />
        ))}
      </div>
    </div>
  </section>
  );
}
