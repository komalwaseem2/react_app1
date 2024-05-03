import React from 'react';

export default function Product(props){

    let name =<label>{props.item.name} &nbsp;</label>;

    if (!props.item.stocked)
        name = <label style={{color: 'red'}}>{props.item.name} &nbsp;</label>;

    return (<div>
        {name}
        <label>{props.item.price}</label>
        <br></br>
    </div>);
}