import React from 'react';

export default function SearchBar(){
    return (<>
        <input type='text' placeholder='Search'></input>
        <div>
            <input type='checkbox'></input>
            <label>Only show products in stock</label>
        </div>
    </>);
}