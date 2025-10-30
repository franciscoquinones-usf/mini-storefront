// Controlled inputs that update parent state, if price is above $500, it should belong in an entirely differnt store (electronics)

'use client'

import {useState, useEffect}, from 'react';
export default function PriceFilter({maxAvailable=500, value, onChange}) { 
    const [local, setLocal] = useState(value || maxAvailable);

    useEffect(() => {
        setLocal(value);
    }, [value]);

    return ( 

    )
}