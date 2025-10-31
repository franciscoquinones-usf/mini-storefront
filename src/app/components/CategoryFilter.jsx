// Controlled inputs that update parent state

'use client'

export default function CategoryFilter({categories = [], value, onChange}) {
    return( 
        <div>
            <label>Category</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
}