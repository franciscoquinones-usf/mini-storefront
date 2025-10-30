// Shows correct message based on state (loading, error, or empty)

'use client'

export default function StatusMessage({ loading, error, empty}) {
    if (loading) {
        return (
            <div>Loading Products</div>
        );
    }
    if (error) {
        return (
            <div>Error Loading Products: {error}</div>
        );
    }
    if (empty) {
        return (
            <div>No products matched your filters</div>
        );
    }
    return null;
}