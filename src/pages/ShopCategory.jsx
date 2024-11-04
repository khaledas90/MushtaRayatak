import React, { useContext } from 'react';
import Panner from '../component/pannar/Panner';
import Items from '../component/items/items';
import { ShopContext } from '../context/ShopContext';

export default function ShopCategory(props) {
    const { allProduct } = useContext(ShopContext);
    console.log(allProduct);

    // Filter products by category
    const filteredProducts = allProduct.filter(item => item.category === props.Category);
    console.log(filteredProducts);

    return (
        <div className="ShopCategory">
            <Panner img={props.panner} categoryType={props.Category} />

            <div className="product_category">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((item) => (
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
        </div>
    );
}
