export async function GET() {
    const products = [
        {id: "p1", name: "Laptop", price: 1200, category: "Electronics", stock: 5},
        {id: "p2", name: "iPad", price: 1100, category: "Electronics", stock: 6},
        {id: "p3", name: "iPhone", price: 1000, category: "Electronics", stock: 8},
        {id: "p4", name: "Desktop", price: 1500, category: "Electronics", stock: 3},
        {id: "p5", name: "GPU", price: 200, category: "Electronics", stock: 2},
        {id: "p6", name: "CPU", price: 200, category: "Electronics", stock: 2},
        {id: "p7", name: "RAM", price: 70, category: "Electronics", stock: 2},
        {id: "p8", name: "Case", price: 70, category: "Electronics", stock: 2},
        {id: "p9", name: "Keyboard", price: 50, category: "Electronics", stock: 5},
        {id: "p10", name: "Mouse", price: 50, category: "Electronics", stock: 5},

        {id: "p11", name: "Pizza", price: 20, category: "Food", stock: 5},
        {id: "p12", name: "Steak", price: 30, category: "Food", stock: 5},
        {id: "p13", name: "Fruits", price: 10, category: "Food", stock: 5},
        {id: "p14", name: "Chicken", price: 15, category: "Food", stock: 5},
        {id: "p15", name: "Onion", price: 5, category: "Food", stock: 5},
        {id: "p16", name: "Carrot", price: 6, category: "Food", stock: 5},
        {id: "p17", name: "Brocolli", price: 4, category: "Food", stock: 5},
        {id: "p18", name: "Bread", price: 3, category: "Food", stock: 5},
        {id: "p19", name: "Cake", price: 12, category: "Food", stock: 5},
        {id: "p20", name: "Pie", price: 16, category: "Food", stock: 5},

        {id: "p21", name: "Face Wash", price: 10, category: "Hygiene", stock: 5},
        {id: "p22", name: "Shampoo", price: 12, category: "Hygiene", stock: 5},
        {id: "p23", name: "Conditioner", price: 14, category: "Hygiene", stock: 5},
        {id: "p24", name: "Vitamins", price: 8, category: "Hygiene", stock: 5},
        {id: "p25", name: "Lotion", price: 7, category: "Hygiene", stock: 5},
        {id: "p26", name: "Hand Soap", price: 6, category: "Hygiene", stock: 5},
        {id: "p27", name: "Hair Gel", price: 8, category: "Hygiene", stock: 5},
        {id: "p28", name: "Tissues", price: 10, category: "Hygiene", stock: 5},
        {id: "p29", name: "Medicine", price: 12, category: "Hygiene", stock: 5},
        {id: "p30", name: "Socks", price: 5, category: "Hygiene", stock: 5},
        


    ];
    return Response.json(products)
}

// 8-12 items across 3+ categories