export async function GET() {
    const products = [
        {id: "p1", name: "Laptop", price: 1200, category: "Electronics", stock: 5},
        {id: "p2", name: "iPad", price: 1100, category: "Electronics", stock: 6},
        {id: "p3", name: "iPhone", price: 1000, category: "Electronics", stock: 8},
        {id: "p4", name: "Desktop", price: 1500, category: "Electronics", stock: 3},

        {id: "p5", name: "Pizza", price: 20, category: "Food", stock: 3},
        {id: "p6", name: "Steak", price: 30, category: "Food", stock: 2},
        {id: "p7", name: "Fruits", price: 10, category: "Food", stock: 5},
        {id: "p8", name: "Chicken", price: 15, category: "Food", stock: 6},
       
        {id: "p9", name: "Face Wash", price: 10, category: "Hygiene", stock: 5},
        {id: "p10", name: "Shampoo", price: 12, category: "Hygiene", stock: 4},
        {id: "p11", name: "Conditioner", price: 14, category: "Hygiene", stock: 3},
        {id: "p12", name: "Vitamins", price: 8, category: "Hygiene", stock: 6},
       
    ];
    return Response.json(products)
}
