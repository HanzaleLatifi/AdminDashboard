import React from 'react';
import { products } from '../data/dummy';

const Products = () => {
  return (
    <div>
      {products.map(p=>{
        return <div>
                <p>{p.title}</p>
                <img key={p.id} src={`${process.env.PUBLIC_URL}${p.imgSrc}`} alt={`Image ${p.id}`} />
        </div>
      })}
    </div>
  )
}

export default Products