import React from 'react';
import Title from '../title/tittle'
import new_collection from '../../assets/new_collections.js'
import Items from '../items/items'


export default function NewCollection() {
  return (
    <section className="popular py-10">
    <Title
      mainTitle="New Collection"
      showHr={true}
      sizeHr="w-1/2 mx-auto"
      StyleHr="w-1/2 mx-auto"
    />
    <div className="container mx-auto px-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {new_collection.map((item) => (
          <Items
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            NewPrice={item.new_price}
            OldPrice={item.old_price}
            offer={(item.id === 12 || item.id === 28 || item.id ===15 || item.id === 14) ? '20% OFF' : undefined}
              isOffer={(item.id === 12 || item.id === 28 || item.id === 15 || item.id === 14)}
          />
        ))}
      </div>
    </div>
  </section>
  );
}
