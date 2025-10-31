// Controlled inputs that update parent state, if price is above $500, it should belong in an entirely differnt store (electronics)

'use client'

import {useState, useEffect} from 'react';
export default function PriceFilter({maxAvailable=500, value, onChange}) { 
    const [local, setLocal] = useState(value || maxAvailable);

    useEffect(() => {
        setLocal(value);
    }, [value]);

    return ( 
        <div>
            <label>Max Price: ${local}</label>
            <input type="range" min="0" max={maxAvailable} step="1" value={local} onChange={(e) => {
                const v =Number(e.target.value);
                setLocal(v);
                onChange(v);
            }}
            />
        </div>
    )
}