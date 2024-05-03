import React from 'react';
import Category from './CategoryLI';
import Product from './Product';

export default function ProductList(props){

    const categories = [... new Set(props.products.map((item) =>  item.category))];

    return (<div>
        {categories.map((category=><>
        <Category name={category}></Category>
        {props.products.filter(item=>item.category == category).map((item) =>  <Product item={item}></Product>)}
        </>
        ))}
    </div>);
}