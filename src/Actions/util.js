import React from 'react';

/* auto generates select options */
export function addSelectOptions(start, max, add, id) {
    let items = [];         
    for (let i = start; i <= max; i += add) {             
        items.push(<option key={i} value={i}>{i + " " + id}</option>);   
    }
    return items;
}

export function calculatePrice(basePrice, multiplier, decrease){
    console.log(multiplier);
    if(!decrease) return basePrice*multiplier;

    var reduction = 1; // pourcentage that is going to be payed, 1 = 100%
    var total = 0;
    for(var i = 0; i < multiplier; i++){
        if(i >= 1 && i < 4) reduction = 0.9;
        else if(i >= 4 && i < 10) reduction = 0.7;
        else if(i >= 10) reduction = 0.5;

        total += basePrice*reduction;
    }

    return total;
}
